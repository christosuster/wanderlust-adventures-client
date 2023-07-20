import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Logo = () => {
  return (
    <div>
      <Link className="logo" to="/home">
        <h5>Wanderlust</h5>
        <h6>Adventures</h6>
      </Link>
    </div>
  );
};

export default Logo;
