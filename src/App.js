import "./App.css";
import { Navbar, useData, ProductListing } from "./Components/export";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import data from "./Database.json";

function App() {
  const { state, dispatch } = useData();
  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: data });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
