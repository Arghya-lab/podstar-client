import {
  globalStatesActionType,
  globalStatesType,
} from "@/@types/globalStates";
import { getLocalSetting } from "@/services/localSettings";

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
    case "setUserFetched":
      return {
        ...states,
        isUserFetched: true,
      };
      break;
    case "setOfflineSetting":
      return {
        ...states,
        settings: getLocalSetting(),
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
    case "updateSettings":
      return {
        ...states,
        settings: action.payload,
      };
      break;
    case "updateFavorite":
      return {
        ...states,
        favorites: action.payload,
      };
      break;

    default:
      return states;
      break;
  }
}
