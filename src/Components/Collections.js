import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/collections.css";
import Card from "./Card";
import Menu from "./Menu";

export default function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/1/collections`)
      .then((response) => response.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <>
      <div className="yourCollections">
        <h1>Your collections</h1>
      </div>
      <div className="wrapper">
        {collections.map((collection, i) => (
          <Card id={i + 1} key={i} name={collection.title} />
        ))}
      </div>
      <div className="menu">
        <Menu />
      </div>
    </>
  );
}
