import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";
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
