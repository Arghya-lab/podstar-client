import { Dispatch } from "react";

export interface globalStatesType {
  isPodcastCollapsibleOpen: boolean;
}

export interface globalStatesContextType extends globalStatesType {
  dispatch: Dispatch<togglePodcastCollapsibleType>;
}

export interface togglePodcastCollapsibleType {
  type: "togglePodcastCollapsible";
}

export type globalStatesActionType = togglePodcastCollapsibleType;
