import {
  globalStatesActionType,
  globalStatesType,
} from "@/@types/globalStates";

export default function reducer(
  states: globalStatesType,
  action: globalStatesActionType
): globalStatesType {
  switch (action.type) {
    case "onUserLogin":
      return {
        ...states,
        user: action.payload.user,
        settings: action.payload.settings,
      };
      break;
    case "togglePodcastCollapsible":
      return {
        ...states,
        isPodcastCollapsibleOpen: !states.isPodcastCollapsibleOpen,
      };
      break;
    case "updateSubscriptions":
      return {
        ...states,
        subscriptions: action.payload,
      };
      break;
    case "updateTrending":
      return {
        ...states,
        trending: action.payload,
      };
      break;

    default:
      return states;
      break;
  }
}
