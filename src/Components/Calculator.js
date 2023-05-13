// import React from "react"; 

import React, { useState } from "react";
import "../style.css"

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAddition = () => {
    if (!validateInputs()) {
      return;
    }

    const result = Number(number1) + Number(number2);
    setResult(result);
    setErrorMessage("");
  };

  const handleSubtraction = () => {
    if (!validateInputs()) {
      return;
    }

    const result = Number(number1) - Number(number2);
    setResult(result);
    setErrorMessage("");
  };

  const handleMultiplication = () => {
    if (!validateInputs()) {
      return;
    }

    const result = Number(number1) * Number(number2);
    setResult(result);
    setErrorMessage("");
  };

  const handleDivision = () => {
    if (!validateInputs()) {
      return;
    }

    if (Number(number2) === 0) {
      setErrorMessage("Cannot divide by zero");
      return;
    }

    const result = Number(number1) / Number(number2);
    setResult(result);
    setErrorMessage("");
  };

  const validateInputs = () => {
    if (number1 === "" || number2 === "") {
      setErrorMessage("Please enter both numbers");
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(number1) || !/^-?\d*\.?\d+$/.test(number2)) {
      setErrorMessage("Please enter valid numbers");
      return false;
    }

    return true;
  };

  return (
    <div className="calculator">
  <div>
    <label>Number 1:</label>
    <input type="text" value={number1} onChange={handleNumber1Change} />
  </div>
  <div>
    <label>Number 2:</label>
    <input type="text" value={number2} onChange={handleNumber2Change} />
  </div>
  <div>
    <button onClick={handleAddition}>+</button>
    <button onClick={handleSubtraction}>-</button>
    <button onClick={handleMultiplication}>*</button>
    <button onClick={handleDivision}>/</button>
  </div>
  {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
  {result && (
    <div style={{ color: "green" }}>
      Result: {result}
    </div>
  )}
</div>

  );
}

export default Calculator;
