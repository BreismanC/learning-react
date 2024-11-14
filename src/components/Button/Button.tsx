import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode
  onClick: () => void;
}

export const ChildrenButton = ({ children }: Omit<Props, "onClick">) => {
  return <>{children}</>;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="custom__button" onClick={onClick}>
      {children}
    </button>
  );
};
