import "./App.css";
import String from "./String";

function StringsBlock(props) {
  return (
    <div className="grid col-span-1">
      {props.colors.map((color, index) => (
        <String key={index} color={color}></String>
      ))}
    </div>
  );
}
export default StringsBlock;
