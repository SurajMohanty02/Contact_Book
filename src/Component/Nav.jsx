import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar navbar-expand bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: "white" }}>
          Contact Book
        </Link>
      </div>
      <div className="ml-auto mr-auto" style={{ width: "200px" }}>
        <Link to="/Add-contact" className=" ml-auto mr-auto btn btn-light">
          Create Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
