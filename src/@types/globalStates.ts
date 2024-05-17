import { Dispatch } from "react";
import { FavoriteType, SettingsType, UserType } from "@/@types/res";
import { PodcastSuggestionType } from "@/@types/podcast";

export interface globalStatesType {
  isPodcastCollapsibleOpen: boolean;
  user: UserType | null;
  subscriptions: null | PodcastSuggestionType[]; //Update type
  favorites: null | FavoriteType[];
  settings: SettingsType;
  trending: null | PodcastSuggestionType[];
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
export interface togglePodcastCollapsibleType {
  type: "togglePodcastCollapsible";
}
export interface updateSubscriptionsType {
  type: "updateSubscriptions";
  payload: PodcastSuggestionType[];
}
export interface updateTrendingType {
  type: "updateTrending";
  payload: PodcastSuggestionType[];
}

export type globalStatesActionType =
  | onUserLoginType
  | togglePodcastCollapsibleType
  | updateSubscriptionsType
  | updateTrendingType;
