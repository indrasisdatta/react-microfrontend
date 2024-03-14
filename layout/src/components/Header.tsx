import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto md:flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">React Microfrontend</h1>
        </div>
        <nav className="space-x-4">
          <NavLink to={"/"} className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to={"/product"} className="text-white hover:text-gray-300">
            Products
          </NavLink>
          <NavLink to={"/to-do"} className="text-white hover:text-gray-300">
            To do list
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
