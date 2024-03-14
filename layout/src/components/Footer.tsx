import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <p className="text-center">
          React Webpack App &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
