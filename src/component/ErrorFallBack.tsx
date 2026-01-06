import { FallbackProps } from "react-error-boundary";

const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <p>Something Went Wrong!!</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Retry?</button>
    </div>
  );
};

export default ErrorFallBack;
