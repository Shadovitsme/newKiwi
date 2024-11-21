import "../App.css";
import String from "./String";

function StringsBlock(props: { colors: string[] }) {
  return (
    <div className="grid col-span-1">
      {props.colors.map((color: string, index: number) => (
        <String key={index} color={color}></String>
      ))}
    </div>
  );
}
export default StringsBlock;
