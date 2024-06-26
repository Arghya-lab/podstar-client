export interface PodcastItemType {
  _id: string;
  name: string;
  imgUrl: string;
  author: string;
  feedUrl: string;
}

export interface PodcastType {
  copyright: string;
  contentEncoded: string;
  description: string;
  feedUrl: string;
  image: { link: string; title: string; url: string } | null;
  itunesAuthor: string;
  itunesCategory: string | null;
  itunesExplicit: string;
  itunesImage: string | null;
  itunesOwner: { name: string; email: string } | null;
  itunesSubtitle: string;
  itunesSummary: string;
  itunesType: string;
  language: string;
  link: string;
  title: string;
}

export interface EpisodeType {
  author: string;
  contentEncoded: string;
  description: string;
  enclosure: { url: string; type: string } | null;
  guid: string;
  itunesAuthor: string;
  itunesDuration: number;
  itunesEpisode: string;
  itunesEpisodeType: string;
  itunesExplicit: string;
  itunesSubtitle: string;
  itunesSummary: string;
  itunesTitle: string;
  link: string;
  pubDate: string;
  title: string;
}

export interface ItunesType {
  wrapperType?: string;
  kind?: string;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionViewUrl?: string;
  feedUrl?: string;
  trackViewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  artworkUrl600?: string;
  collectionPrice?: number;
  trackPrice?: number;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating?: string;
  genreIds?: string[];
  genres?: string[];
}

export interface PodcastInfoType {
  _id: string;
  podcast: PodcastType;
  episodes: EpisodeType[];
  itunes?: ItunesType;
}

export interface FavoritePodcastType {
  _id: string;
  podcast: PodcastItemType;
  episodeContent: EpisodeType;
}

export interface localFavoriteType {
  _id: string;
  podcastId: string;
  episodeContent: EpisodeType;
}
