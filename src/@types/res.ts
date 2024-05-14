import { EpisodeType, ItunesType, PodcastType } from "./podcast";

export interface UserType {
  image: string | null;
  isVerified: boolean;
  userName: string;
  _id: string;
}

export interface getPodcastInfoType {
  podcast: PodcastType;
  episodes: EpisodeType[];
  itunes?: ItunesType;
}

export interface UserResType {
  success: boolean;
  message: string;
  user?: UserType;
}

export interface VerifyEmailResType {
  success: boolean;
  isTokenExpired: boolean;
  message: string;
}
