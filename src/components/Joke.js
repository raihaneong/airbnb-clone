import React from "react";




export default function Joke(props) {
  const upvotes = 4;
  const downvotes = 5;

  return (
    <div className="Joke">
      <h1>jokes number : </h1>
      {props.setup && <h3> setup : {props.setup} </h3>}
      {props.punchLine && <p> puchline : {props.punchLine} </p>}
      <span>upvotes {upvotes}</span>
      <span> downvotes {downvotes}</span>
    </div>
  );
}
