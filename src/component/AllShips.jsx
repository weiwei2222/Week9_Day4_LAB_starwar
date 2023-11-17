import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarShipCard from "./StarShipCard";

function AllShips() {
  const [allShips, setAllShips] = useState(null);
  const starships = "starships";
  const url = `https://swapi.dev/api/${starships}`;

  const getAllShips = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllShips(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAllShips();
  }, []);

  return (
    <div>
      <Link to="/">
        {allShips &&
          allShips.results.map((ship, index) => (
            <StarShipCard key={index} shipObj={ship} />
          ))}
      </Link>
    </div>
  );
}

export default AllShips;
