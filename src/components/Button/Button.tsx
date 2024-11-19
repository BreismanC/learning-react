import { ReactNode } from "react";
import "./Button.css";
import { useGlobalContext } from "../../context/global.context";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const ColorRed = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext();

  return (
    <div className="color__red">
      <div>El valor del contexto global es: {value}</div>
      {children}
    </div>
  );
};

export const Button = ({ children, onClick }: Props) => {
  const { setValue } = useGlobalContext();

  const handleClick = () => {
    onClick();
    setValue(10);
  };

  return (
    <button className="custom__button" onClick={handleClick}>
      {children}
    </button>
  );
};
