import React from "react";
import InputModel from "../models/InputModel";

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputModel> = (
  { type, ...props },
  ref
) => {
  return (
      <input name={type} type={type} ref={ref} {...props} className="w-64 border-b-2 py-2 outline-none mt-3" />
  );
};

export default React.forwardRef(Input);
