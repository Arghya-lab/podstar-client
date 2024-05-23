import { Dispatch } from "react";
import { SettingsType, UserType } from "@/@types/res";
import { FavoritePodcastType, PodcastItemType } from "@/@types/podcast";

export interface globalStatesType {
  isPodcastCollapsibleOpen: boolean;
  user: UserType | null;
  isUserFetched: boolean;
  subscriptions: null | PodcastItemType[]; //Update type
  favorites: null | FavoritePodcastType[];
  settings: SettingsType;
  trending: null | PodcastItemType[];
}

export interface globalStatesContextType extends globalStatesType {
  dispatch: Dispatch<globalStatesActionType>;
}

// Dispatch types
export interface onUserLoginType {
  type: "onUserLogin";
  payload: {
    user: UserType;
    settings: SettingsType;
  };
}
export interface setUserFetchedType {
  type: "setUserFetched";
}
export interface setOfflineSettingType {
  type: "setOfflineSetting";
}
export interface togglePodcastCollapsibleType {
  type: "togglePodcastCollapsible";
}
export interface updateSubscriptionsType {
  type: "updateSubscriptions";
  payload: PodcastItemType[];
}
export interface updateTrendingType {
  type: "updateTrending";
  payload: PodcastItemType[];
}
export interface updateSettingsType {
  type: "updateSettings";
  payload: SettingsType;
}
export interface updateFavoriteType {
  type: "updateFavorite";
  payload: FavoritePodcastType[];
}

export type globalStatesActionType =
  | onUserLoginType
  | setUserFetchedType
  | setOfflineSettingType
  | togglePodcastCollapsibleType
  | updateSubscriptionsType
  | updateTrendingType
  | updateSettingsType
  | updateFavoriteType;
