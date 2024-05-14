import {
  globalStatesActionType,
  globalStatesType,
} from "@/@types/globalStates";

export default function reducer(
  states: globalStatesType,
  action: globalStatesActionType
): globalStatesType {
  switch (action.type) {
    case "setUser":
      return {
        ...states,
        user: action.payload,
      };
      break;
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
