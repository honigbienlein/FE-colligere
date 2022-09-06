import React from "react";
import "../css/card.css";

export default function Card({ title }) {
  const backgroundImg = { background: "url('../images/books.jpeg')" };

  return (
    <>
      <div className="card" style={backgroundImg}>
        <div className="card-title">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
