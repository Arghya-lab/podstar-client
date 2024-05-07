import { EpisodeType, ItunesType, PodcastType } from "./podcast";

export interface getPodcastInfoType {
  podcast: PodcastType;
  episodes: EpisodeType[];
  itunes?: ItunesType;
}
