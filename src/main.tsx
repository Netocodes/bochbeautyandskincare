import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import SmoothScrolling from "./utils/smoothScroll.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScrolling>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SmoothScrolling>
  </StrictMode>
);
