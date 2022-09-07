import React from "react";
import "../css/card.css";

export default function Card({ title, cover }) {
  const backgroundImg = { backgroundImage: `url('${cover}')` };

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
