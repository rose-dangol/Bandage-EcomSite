import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }:ContainerProps) => {
  return <div className="w-[80vw] mx-auto">{children}</div>;
};

export default Container;
