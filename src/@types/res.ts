import {
  EpisodeType,
  ItunesType,
  PodcastSuggestionType,
  PodcastType,
} from "@/@types/podcast";

export interface UserType {
  _id: string;
  userName: string;
  image: string | null;
  email: string | null;
  isVerified: boolean;
}

export interface FavoriteType {
  PodcastId: string;
  guid: string;
}

export interface SettingsType {
  playbackSpeed: number;
  rewindIntervalSec: number;
  forwardIntervalSec: number;
}

export interface getPodcastInfoType {
  _id: string;
  podcast: PodcastType;
  episodes: EpisodeType[];
  itunes?: ItunesType;
}

export interface UserResType {
  success: boolean;
  message: string;
  user?: UserType;
  settings: SettingsType;
}

export interface VerifyEmailResType {
  success: boolean;
  isTokenExpired: boolean;
  message: string;
}

export interface GetSubscriptionsResType {
  success: boolean;
  subscriptions: PodcastSuggestionType[];
  message: string;
}
