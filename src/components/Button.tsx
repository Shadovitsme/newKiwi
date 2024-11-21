import "../App.css";
const trash =
  "/static/media/trash-blank-alt-svgrepo-com.ae13f1edadb9f63ca9569682862765a3.svg";
const plus =
  "/static/media/plus-svgrepo-com.a8c544fec9c3551920b234dd29919adc.svg";

const Button = ({
  scale = "scale-100",
  color = "",
  rounded = "rounded-md",
  icon = trash,
  content = "",
}) => {
  return (
    <div className={scale}>
      <button
        className={
          "flex items-center gap-1 " +
          color +
          " text-white p-2 " +
          rounded +
          " hover:" +
          color +
          " transition duration-300 ease-in-out transform hover:scale-110"
        }
      >
        <img
          className="w-5 h-5 stroke-white fill-white"
          src={icon === "plus" ? plus : trash}
          alt="button icon place"
        ></img>
        {content}
      </button>
    </div>
  );
};

export default Button;
