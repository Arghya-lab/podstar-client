import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider.tsx";
import { GlobalStatesProvider } from "@/providers/globalStates-provider.tsx";
import { PlayerStateProvider } from "@/providers/playerState-provider.tsx";
import router from "@/router.tsx";
import { ThemeEnum } from "@/@types/theme.ts";
import "@/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStatesProvider>
      <ThemeProvider defaultTheme={ThemeEnum.SYSTEM} storageKey="vite-ui-theme">
        <PlayerStateProvider>
          <RouterProvider router={router} />
        </PlayerStateProvider>
      </ThemeProvider>
    </GlobalStatesProvider>
  </React.StrictMode>
);
