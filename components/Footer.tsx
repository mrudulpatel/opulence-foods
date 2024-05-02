import React from "react";

const Footer = () => {
  return <footer className="border-t p-8 w-full text-center text-gray-500">
    &copy; {new Date().getFullYear()} OpulenceFoods
  </footer>;
};

export default Footer;
