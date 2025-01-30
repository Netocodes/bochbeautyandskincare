import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <SmoothScrolling> */}
    <ThemeProvider>
      <Analytics />

      <App />
    </ThemeProvider>
    {/* </SmoothScrolling> */}
  </StrictMode>
);
