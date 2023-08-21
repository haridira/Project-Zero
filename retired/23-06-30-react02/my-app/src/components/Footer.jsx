import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();

  let name = "Haritha";

  return (
    <footer className="footer">
      <h5>
        © {name} {year}
      </h5>
    </footer>
  );
};

export default Footer;
