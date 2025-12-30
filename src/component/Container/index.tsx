import { PropsWithChildren } from "react";


const Container = ({ children }:PropsWithChildren) => {
  return <div className="w-[80vw] mx-auto">{children}</div>;
};

export default Container;
