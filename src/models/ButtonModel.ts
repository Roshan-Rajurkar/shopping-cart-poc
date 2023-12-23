import Button from "../components/Button";

type ButtonModel = {
  text: string;
  type?: "submit" | "reset" | "button";
  classname?: string;
};

export default ButtonModel;
