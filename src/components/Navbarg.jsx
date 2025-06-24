import React from "react";
import { Link } from "react-router-dom";

const Navbarg = () => {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/a" style={{ marginRight: "15px" }}>Add Movie</Link>
      <Link to="/v">View Movie</Link>
    </nav>
  );
};

export default Navbarg;
