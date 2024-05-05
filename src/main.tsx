import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { ThemeEnum } from "./@types/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={ThemeEnum.SYSTEM} storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
