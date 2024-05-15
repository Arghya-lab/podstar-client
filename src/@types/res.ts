import { EpisodeType, ItunesType, PodcastType } from "./podcast";

export interface UserType {
  _id: string;
  userName: string;
  image: string | null;
  email: string | null;
  isVerified: boolean;
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
