import React from "react";
import ListUser from "./ListUser";

const ListUsers = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="box center-align">{children}</div>
      </div>
    </div>
  );
};

export default ListUsers;
