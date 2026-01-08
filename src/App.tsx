import AppRoutes from "./routes";
import Provider from "./provider";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./component/ErrorFallBack";

function App() {
  return (
    <>
      <Provider>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <AppRoutes />
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default App;
