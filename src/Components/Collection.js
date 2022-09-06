import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "../css/collection.css";
import { HEROKUURL } from "../environmentVariables";
import Card from "./Card";
import Menu from "./Menu";

export default function Collection({ setScannedData }) {
  const [items, setItems] = useState([]);
  const { userId, collectionId } = useParams();

  useEffect(() => {
    axios
      .get(`${HEROKUURL}/users/${userId}/collections/${collectionId}/items`)
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      });
  }, []);
  return (
    <>
      <div className="collection">
        <h1>{items.name_collection}</h1>
      </div>
      <div className="wrapper">
        {items.Entries?.map((item, i) => (
          <NavLink
            to={`/users/${userId}/collections/${items.id_collection}/items/${item.id_entry}`}
          >
            <Card
              id={item.id_entry}
              key={item.id_entry}
              title={item.AttributeValue?.attributeValue}
            />
          </NavLink>
        ))}
      </div>
      <div className="menu">
        <Menu setScannedData={setScannedData} />
      </div>
    </>
  );
}
