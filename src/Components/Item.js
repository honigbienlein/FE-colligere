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
        {/* TBD: get itemname */}
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
            <p>item.authors</p>
            <h4>Genre</h4>
            <p>Publicaton date</p>
            <h4>01.01.2020</h4>
            <p>Thriller</p>
          </div>
        </div>
        <div className="itemBottom">
          <h4>Summary</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolores cum corporis, dolore, ducimus iusto tempora
            illum earum ipsam, fugit natus temporibus dolor blanditiis
            consequuntur? Illo dolores assumenda nemo tenetur!
          </p>
          <h4>Commentar</h4>
          <p>
            I love this book, it is so exciting! A must have. The best book I
            have ever read!!!
          </p>
        </div>
      </div>
    </>
  );
}
