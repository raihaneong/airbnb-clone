import React, { useState }from "react";

export default function Counter() {
  const [currentState, setCurrentState] = useState(() => 0);

  function handlePlusButton() {
    setCurrentState((prevValue) => prevValue + 1);
  }
  function handleMinusButton() {
    setCurrentState((prevValue) => prevValue - 1);
  }
  return (
    <div className="Counter">
      <h1>This is a counter</h1>
      <div className="Counter__content">
        <h1>{currentState}</h1>
        <div className="Counter__content-button">
          <button onClick={handlePlusButton}> plus </button>
          <button onClick={handleMinusButton}> minus </button>
        </div>
      </div>
    </div>
  );
}
