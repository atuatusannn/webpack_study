import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./main";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
