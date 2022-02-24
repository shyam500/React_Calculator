import "./Calculator.css";
import Screen from "./Screen";
import KeyBoard from "./KeyBoard";
import { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState([]);

  const clearScreenFunc = () => {
    setData([]);
  };

  const buttonValueFunc = (value) => {
    if (data[0] === "invalid") {
      setData([value]);
    } else {
      setData([...data, value]);
    }
  };

  const answerFinderFunc = () => {
    try { 
      const ans = eval(data.join(""));
      setData(ans.toFixed(2).toString().split(""));
    } catch (err) {
      setData(["invalid"]);
    }
  };

  const plusMinusFunc = ()=>{
      if(data.includes('-')){
          const index = data.indexOf('-');
          data.splice(index,1);
        setData([...data]);
      }else{
        setData(['-',...data])
      }
  };

  return (
    <section className="calculator">
      <Screen screenValue={data} />
      <KeyBoard
        btnFunc={buttonValueFunc}
        ansFunc={answerFinderFunc}
        clearFunc={clearScreenFunc}
        plusMinus={plusMinusFunc}
      />
    </section>
  );
};

export default Calculator;