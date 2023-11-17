import React from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function StarShipCard({ shipObj }) {
  const shipname = shipObj.name;
  return (
    <Link to={`/${shipname}`} state={shipObj}>
      <div className="ship">{shipObj.name}</div>
    </Link>
  );
}

export default StarShipCard;
