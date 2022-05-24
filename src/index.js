import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// fetch("./database/database.txt").then(function (response) {
//   response.text().then(function (text) {
//     document.getElementById("textfile").textContent = text;
//   });
// });

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
