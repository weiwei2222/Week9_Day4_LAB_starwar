import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Shipdetails() {
  const { state } = useLocation();
  return (
    <div>
      <h1>This is ship details:</h1>
      <h1>{state.name}</h1>
      <h2>{state.model}</h2>
      <h3>{state.manufacturer}</h3>
    </div>
  );
}

export default Shipdetails;
