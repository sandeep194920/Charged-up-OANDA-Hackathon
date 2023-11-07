import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 p-7 flex-col flex justify-center items-center text-sm mb-0">
      <p className="text-gray-300">
        &copy; {currentYear} OANDA Hackathon, 2023. Tom Sanderson & Sandeep
        Amarnath. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
