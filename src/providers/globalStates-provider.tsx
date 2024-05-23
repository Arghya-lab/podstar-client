import { ReactNode, createContext, useContext, useReducer } from "react";
import { globalStatesContextType } from "@/@types/globalStates";
import reducer from "@/providers/reducers/globalStateReducer";
import { defaultSettings } from "@/services/localSettings";

const defaultGlobalStatesValue = {
  isPodcastCollapsibleOpen: false,
  user: null,
  isUserFetched: false,
  subscriptions: null,
  favorites: null,
  settings: defaultSettings,
  trending: null,
};

const GlobalStatesContext = createContext<globalStatesContextType>({
  ...defaultGlobalStatesValue,
  dispatch: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStates = () => useContext(GlobalStatesContext);

export function GlobalStatesProvider({ children }: { children: ReactNode }) {
  const [states, dispatch] = useReducer(reducer, defaultGlobalStatesValue);

  return (
    <GlobalStatesContext.Provider value={{ ...states, dispatch }}>
      {children}
    </GlobalStatesContext.Provider>
  );
}
