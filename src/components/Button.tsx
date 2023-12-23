import React from "react";
import ButtonModel from "../models/ButtonModel";

const Button: React.FC<ButtonModel> = ({ text, type, classname }) => {
  return (
    <button
      className={`w-full text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white py-2 mt-4 rounded-lg ${classname}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
