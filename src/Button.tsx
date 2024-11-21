import "./App.css";
const trash =
  "/static/media/trash-blank-alt-svgrepo-com.ae13f1edadb9f63ca9569682862765a3.svg";
const plus =
  "/static/media/plus-svgrepo-com.a8c544fec9c3551920b234dd29919adc.svg";

function Button(props: {
  scale: string;
  color: string;
  rounded: string;
  icon: string;
  content: string;
}) {
  return (
    <div className={props.scale}>
      {/* TODO сделать чтоб интервал сохранялся при изменении масштаба */}
      <button
        className={
          "flex items-center gap-1 " +
          props.color +
          " text-white p-2 " +
          props.rounded +
          " hover:" +
          props.color +
          " transition duration-300 ease-in-out transform hover:scale-110"
        }
      >
        <img
          className="w-5 h-5 stroke-white fill-white"
          src={props.icon == "plus" ? plus : trash}
          alt="button icon place"
        ></img>
        {props.content}
      </button>
    </div>
  );
}
Button.defaultProps = {
  rounded: "rounded-md",
  scale: "scale-100",
  icon: trash,
  content: "",
};
export default Button;
