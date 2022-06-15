import React from "react";

export default function Hero() {
  const name = "person who read this";
  const hour = new Date().getHours();
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  let timeOfDay 

  if (hour < 12) {
    timeOfDay  = 'morning'
  } else if (timeOfDay >= 12 && timeOfDay < 18){
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'evening '
  }

  return (
    <header className="Hero">
      <img src={require("../images/photo-grid.png")} alt="photo grid" className="photo-grid" />
      <div className="heroText">
        <h1>Online Experiences</h1>
        <p>
          Join unique Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus pariatur expedita eligendi eum fugiat. Ab molestiae dicta
          eius modi accusantium ipsa eligendi commodi expedita facere!
        </p>

        <h1>
          {" "}
          Hello {name}, currently is {day} {month + 1} {year}, right now is {hour} o'clock
        </h1>

        <h1> Good {timeOfDay}!</h1>
      </div>
    </header>
  );
}
