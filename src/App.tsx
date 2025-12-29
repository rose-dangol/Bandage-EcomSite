import AppRoutes from "./routes";
import Provider from "./provider";
function App() {
  return (
    <>
      <Provider>
        <AppRoutes />
      </Provider>
    </>
  );
}

export default App;
