import "../App.css";
import Button from "./Button";

function String(props: { color: string }) {
  return (
    <div className="flex space-x-20 pb-10">
      <Button rounded="rounded-full" color={props.color} icon="plus" />
      <Button content="Сохранить" color={props.color} />
      <Button content="Сохранить" scale="scale-125" color={props.color} />
      <Button content="Сохранить" scale="scale-150" color={props.color} />
    </div>
  );
}

export default String;
