import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand footer-brand">
       

        <span>
          <strong>V RESIDENCY</strong>
          <small>  LUXURY ROOMS</small>
        </span>
      </a>

      <p>
        © {new Date().getFullYear()} V Residency.
        All rights reserved.
      </p>

  
    </footer>
  );
}

export default Footer;