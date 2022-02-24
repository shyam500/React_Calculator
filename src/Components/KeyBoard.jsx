import React, { Fragment } from "react";
import "./KeyBoard.css";

const btnArr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "+",
  "-",
  "*",
  "/",
  ".",
  "%",
  "+/-",
  "AC",
  "=",
];

const KeyBoard = (props) => {
  const { btnFunc,ansFunc} = props;

  const buttonClickHandler = (e) => {
    btnFunc(e.target.value);
  };

  const findAnswerHandler = () => {
    ansFunc();
  };


  let buttons = btnArr.map((value) => {
    if (value === "=") {
      return(<input
        key={value}
        value={value}
        type="button"
        className="btn num"
        onClick={findAnswerHandler}
      />);
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

  return <Fragment>{buttons}</Fragment>;
};

export default KeyBoard;
