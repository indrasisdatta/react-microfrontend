import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "layout/Header";
import Footer from "layout/Footer";
import "./globals.css";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">Host app</main>
      <Footer />
    </div>
  </BrowserRouter>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
