import React, { useEffect, useReducer } from "react";

type TodoState = {
  loading: boolean;
  data: [];
  error: null | string;
};
const defaultReducer: TodoState = {
  loading: true,
  data: [],
  error: null,
};

const DataReducer = (state: any, action: any) => {
  if (action.type === "DATA_LOAD_SUCCESS") {
    return {
      loading: false,
      data: action.data,
      error: null,
    };
  } else if (action.type === "DATA_LOAD_ERROR") {
    return {
      loading: false,
      data: [],
      error: action.data,
    };
  }
  return state;
};

const ProductList = () => {
  const [productData, dispatchProductData] = useReducer(
    DataReducer,
    defaultReducer
  );

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();
        dispatchProductData({ type: "DATA_LOAD_SUCCESS", data });
      } catch (e: unknown) {
        let err = e instanceof Error ? e.message : e;
        dispatchProductData({ type: "DATA_LOAD_ERROR", data: err });
      }
    })();
  }, []);

  console.log("productData", productData);

  return (
    <div>
      <h2>Products List</h2>
      {productData.loading && <p>Loading...</p>}
      {!productData.loading && productData.data?.products?.length > 0 && (
        <ul>
          {productData.data?.products.map(
            ({ id, title }: { id: number; title: string }) => (
              <li key={id}>{title}</li>
            )
          )}
        </ul>
      )}
      {!productData.loading && productData.error && <p>{productData.error}</p>}
    </div>
  );
};
export default ProductList;
