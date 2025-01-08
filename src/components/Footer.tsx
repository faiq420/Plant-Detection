import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white font-poppins text-xs text-black text-center p-4">
      &copy; {new Date().getFullYear()} AgriVision. All rights reserved.
    </footer>
  );
};

export default Footer;
