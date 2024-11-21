import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StringsBlock from "./StringsBlock";

const root = ReactDOM.createRoot(document.getElementById("root"));
const colorsFirst = [
  "bg-gray-600",
  "bg-gray-700",
  "bg-gray-800",
  "bg-gray-400",
];

const colorsSecond = ["bg-red-500", "bg-red-600", "bg-red-700", "bg-red-300"];

root.render(
  <React.StrictMode>
    <div className="flex justify-center items-center h-screen w-full">
      <div>
        <StringsBlock colors={colorsFirst}></StringsBlock>
        <div className="h-20"></div>
        <StringsBlock colors={colorsSecond}></StringsBlock>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
