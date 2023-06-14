import React, { useState } from "react";

import "../calculator/Calculator.css";

export const Calculator = () => {
  const [calc, setCalc] = useState("");

  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-"];

  const upadateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => upadateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
    console.log(result);
  };

  const deletedigits = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="calc">
      <div className="display">
        {result ? <span>({result})</span> : ""}&nbsp;
        {calc || "0"}
      </div>
      <div className="operators">
        <button onClick={() => upadateCalc("/")}>/</button>
        <button onClick={() => upadateCalc("*")}>*</button>
        <button onClick={() => upadateCalc("+")}>+</button>
        <button onClick={() => upadateCalc("-")}>-</button>

        <button onClick={deletedigits}>Del</button>
      </div>
      <div className="digits">
        {createDigits()}
        <button onClick={() => upadateCalc("0")}>0</button>
        <button onClick={() => upadateCalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};
