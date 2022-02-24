import { Fragment } from "react";
import "./Screen.jsx";
const Screen = (props) => {
  const { screenValue } = props;
  console.log(screenValue);
  return (
    <Fragment>
      <input type="text" readOnly placeholder="Ready to calculate"  value={screenValue.join('')}/>
    </Fragment>
  );
};

export default Screen;
