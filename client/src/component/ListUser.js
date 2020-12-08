import React from "react";

const ListUser = ({ name, pic, id }) => {
  return (
    <div className="card medium blue-grey darken-1">
      <img className="card-img-top" src={pic} alt="Card image cap" />
      <div className="card-content white-text">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{id}</p>
        <a href={name} className="btn btn-primary">
          Détail
        </a>
      </div>
    </div>
  );
};

export default ListUser;
