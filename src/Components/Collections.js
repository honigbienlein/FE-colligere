import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/collections.css";
import Card from "./Card";
import Menu from "./Menu";
import { HEROKUURL } from "../environmentVariables.js";

export default function Collections() {
  const [collections, setCollections] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`${HEROKUURL}/users/${userId}/collections`).then((response) => {
      console.log(response.data);
      setCollections(response.data);
    });
  }, []);

  return (
    <>
      <div className="yourCollections">
        <h1>Your collections</h1>
      </div>
      <div className="wrapper">
        {collections?.map((collection, i) => (
          <Card id={i + 1} key={i} name={collection.title} />
        ))}
      </div>
      <div className="menu">
        <Menu />
      </div>
    </>
  );
}
