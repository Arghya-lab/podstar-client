import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  globalStatesActionType,
  globalStatesContextType,
  globalStatesType,
} from "@/@types/globalStates";

const defaultGlobalStatesValue = {
  isPodcastCollapsibleOpen: false,
};

const globalStatesContext = createContext<globalStatesContextType>({
  ...defaultGlobalStatesValue,
  dispatch: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStates = () => useContext(globalStatesContext);

export function GlobalStatesProvider({ children }: { children: ReactNode }) {
  const [states, dispatch] = useReducer(reducer, defaultGlobalStatesValue);

  function reducer(
    states: globalStatesType,
    action: globalStatesActionType
  ): globalStatesType {
    switch (action.type) {
      case "togglePodcastCollapsible":
        return {
          ...states,
          isPodcastCollapsibleOpen: !states.isPodcastCollapsibleOpen,
        };
        break;

      default:
        return states;
        break;
    }
  }

  return (
    <globalStatesContext.Provider value={{ ...states, dispatch }}>
      {children}
    </globalStatesContext.Provider>
  );
}
