import React, { Fragment } from "react";
import "./KeyBoard.css";

const btnArr = [
  "AC",
  "%",
  "+/-",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  ".",
  0,
  "=",
];


const KeyBoard = (props) => {
  const { btnFunc, ansFunc, clearFunc,plusMinus } = props;

  const buttonClickHandler = (e) => {
    btnFunc(e.target.value);
  };

  const findAnswerHandler = () => {
    ansFunc();
  };

  const clearScreenHandler = () => {
    clearFunc();
  };

  const plusMinusHandler = ()=>{
    plusMinus();
  }

  let buttons = btnArr.map((value) => {
    if (value === "=") {
      return (
        <input
          key={value}
          value={value}
          type="button"
          className="btn eq"
          onClick={findAnswerHandler}
        />
      );
    } else if (value === "AC") {
      return (
        <input
          key={value}
          value={value}
          type="button"
          className="btn ac"
          onClick={clearScreenHandler}
        />
      );
    } else if (value === "+/-") {
      return (
        <input
          key={value}
          value={value}
          type="button"
          className="btn num"
          onClick={plusMinusHandler}
        />
      );
    } else {
      return (
        <input
          key={value}
          value={value}
          type="button"
          className="btn num"
          onClick={buttonClickHandler}
        />
      );
    }
  });

  return <section className="key_container">{buttons}</section>;
};

export default KeyBoard;
