import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";
import AppRoutes from "./routes";
import Provider from "./provider";

function App() {
  return (
    <div>
      <Provider>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
