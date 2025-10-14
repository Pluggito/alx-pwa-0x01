import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Movies Database App</p>
    </footer>
  );
};

export default Footer;
