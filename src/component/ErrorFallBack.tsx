import { FallbackProps } from "react-error-boundary";

const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="text-red-600 text-center heading-4">
      <p>Something Went Wrong!!</p>
      <p>{error.message}</p>
      <button
        className="bg-primary p-3 cursor-pointer"
        onClick={resetErrorBoundary}
      >
        Retry?
      </button>
    </div>
  );
};

export default ErrorFallBack;
