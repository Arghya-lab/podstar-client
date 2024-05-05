import React from "react";

export enum ThemeEnum {
  SYSTEM = "system",
  DARK = "dark",
  LIGHT = "light",
}

export interface ThemeProviderPropsType {
  children: React.ReactNode;
  defaultTheme?: ThemeEnum;
  storageKey?: string;
}

export interface ThemeProviderState {
  theme: ThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
}
