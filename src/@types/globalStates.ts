import { Dispatch } from "react";
import { UserType } from "./res";

export interface globalStatesType {
  isPodcastCollapsibleOpen: boolean;
  user: UserType | null;
}

export interface globalStatesContextType extends globalStatesType {
  dispatch: Dispatch<globalStatesActionType>;
}

// Dispatch types
export interface setUserType {
  type: "setUser";
  payload: UserType;
}
export interface togglePodcastCollapsibleType {
  type: "togglePodcastCollapsible";
}

export type globalStatesActionType = setUserType | togglePodcastCollapsibleType;
