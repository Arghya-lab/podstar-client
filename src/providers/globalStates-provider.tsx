import { ReactNode, createContext, useContext, useReducer } from "react";
import { globalStatesContextType } from "@/@types/globalStates";
import reducer from "@/providers/reducers/globalStateReducer";

const defaultGlobalStatesValue = {
  isPodcastCollapsibleOpen: false,
  user: null,
  subscriptions: null,
  favorites: null,
  settings: {
    playbackSpeed: 1.0,
    rewindIntervalSec: 10,
    forwardIntervalSec: 10,
  },
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
