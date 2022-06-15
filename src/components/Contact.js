import React from "react";

export default function Contact({ image, name, telephone, email }) {
  return (
    <div className="Contact">
      <div className="Contact__container">
        <img src={image} />
        <h3>{name}</h3>
        <div className="info">
          <p>{telephone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
