import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/item.css";
import { HEROKUURL } from "../environmentVariables";

export default function Item() {
  const [item, setItem] = useState([]);
  const { userId, collectionId, itemId } = useParams();

  useEffect(() => {
    axios
      .get(
        `${HEROKUURL}/users/${userId}/collections/${collectionId}/items/${itemId}`
      )
      .then((response) => {
        /* console.log(response.data); */
        setItem(response.data);
        console.log(item);
      });
  }, []);

  return (
    <>
      <div className="item">
        <h1>{item.title}</h1>
        <div className="itemTop">
          <div className="itemTopLeft">
            <img src={item.cover ?? "/images/nocover.jpeg"} />
          </div>
          <div className="itemTopRight">
            <h4>Have I read this?</h4>
            <img src="/images/yes.png" />
            <h4>Subtitle</h4>
            <p>{item.subtitle}</p>
            <h4>Author(s)</h4>
            <p>
              {item.authors.length > 1
                ? write(item.authors.join(", "))
                : item.authors}
            </p>
            <h4>Pages</h4>
            <p>{item.pages}</p>
            <h4>Publish Date</h4>
            <p>{item.publish_date}</p>
            <h4>Publishers</h4>
            <p>{item.publishers}</p>
            <h4>ISBN</h4>
            <p>{item.isbn}</p>
          </div>
        </div>
        <div className="itemBottom">
          <h4>Comment</h4>
          <p>item.comment</p>
        </div>
      </div>
    </>
  );
}
