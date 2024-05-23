import { FavoritePodcastType, localFavoriteType } from "@/@types/podcast";
import { getPodcast } from "@/api/podcast";

export const localFavoritesKey = "Favorites";

export function setLocalFavorites(Favorites: localFavoriteType[]) {
  localStorage.setItem(localFavoritesKey, JSON.stringify(Favorites));
}

export function getLocalSaveFavorites(): localFavoriteType[] {
  const storedFavorites = localStorage.getItem(localFavoritesKey);

  if (!storedFavorites) {
    setLocalFavorites([]);
    return [];
  }
  try {
    const favorites: localFavoriteType[] = JSON.parse(storedFavorites);
    return favorites;
  } catch (error) {
    console.error("Failed to parse settings from localStorage:", error);
    setLocalFavorites([]);
    return [];
  }
}

export async function getLocalFavorites(): Promise<FavoritePodcastType[]> {
  const favorites = getLocalSaveFavorites();

  const favoritesPromises = favorites.map((fav) =>
    getPodcast(fav.podcastId).then((podcast) => ({
      _id: fav._id,
      podcast,
      episodeContent: fav.episodeContent,
    }))
  );

  const res = await Promise.allSettled(favoritesPromises);

  return res
    .filter(
      (item): item is PromiseFulfilledResult<FavoritePodcastType> =>
        item.status === "fulfilled" && item.value != undefined
    )
    .map((item) => item.value);
}
