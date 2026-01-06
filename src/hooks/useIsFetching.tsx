import { useIsFetching } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { ReactNode } from "react";

export default function Loader(): ReactNode {
  const isFetching = useIsFetching();
  if (!isFetching) return null;
  return (
    <div className="fixed h-full w-full bg-black/20 z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-800 text-center">
        <LoaderCircle className="animate-spin mx-auto mb-4" size={50} />
        {/* <p className="heading-2">Loading </p> */}
      </div>
    </div>
  );
}