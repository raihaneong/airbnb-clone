import React from "react";

function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT' 
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className="Card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="Card__content">
        <img src={require(`../images/${props.coverImg}`)} className="card-photo" />
        <div className="card-description">
          <p>
            {" "}
            ⭐ {props.stats.rating}{" "}
            <span>
              {" "}
              ({props.stats.reviewCount}) ● {props.location}
            </span>{" "}
          </p>
          <p>{props.title}</p>
          <p>
            <strong> From ${props.price} </strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
