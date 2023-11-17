import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllShips from "./component/AllShips";
import StarShipCard from "./component/StarShipCard";
import Shipdetails from "./component/Shipdetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllShips />}></Route>
        <Route path="/:shipname" element={<Shipdetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
