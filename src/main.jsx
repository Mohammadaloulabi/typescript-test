import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* من خلالها لم  يعد بالامكان ان نستدعي طلب جديد سينتقل لصفحة اخرى بدون اعادة تحميل او طلب جديد */}
    <BrowserRouter basename="/typescript-test">
      <App />
    </BrowserRouter>
  </StrictMode>
);
