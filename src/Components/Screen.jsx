import "./Screen.css";
const Screen = (props) => {
  const { screenValue } = props;

  return (
    <section className="screen">
      <input type="text" readOnly placeholder="Ready to calculate"  value={screenValue.join('')}/>
    </section>
  );
};

export default Screen;
