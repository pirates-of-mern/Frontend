import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white z-20 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Bharat Sanskriti Atlas | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
