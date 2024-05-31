import { createContext, useContext, useEffect, useState } from "react";
import {
  ThemeEnum,
  ThemeProviderPropsType,
  ThemeProviderState,
} from "@/@types/theme";

const initialState: ThemeProviderState = {
  theme: ThemeEnum.SYSTEM,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeProviderContext);

export function ThemeProvider({
  children,
  defaultTheme = ThemeEnum.SYSTEM,
  storageKey = "Podstar-theme",
  ...props
}: ThemeProviderPropsType) {
  const [theme, setTheme] = useState<ThemeEnum>(
    () => (localStorage.getItem(storageKey) as ThemeEnum) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeEnum) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
