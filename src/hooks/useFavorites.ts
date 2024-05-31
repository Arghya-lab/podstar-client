import { useEffect } from "react";
import axios, { isAxiosError } from "axios";
import config from "@/config";
import { useGlobalStates } from "@/providers/globalStates-provider";
import { usePlayerState } from "@/providers/playerState-provider";
import { FavoritePodcastType } from "@/@types/podcast";
import { ApiResponseType } from "@/@types/res";
import {
  getLocalFavorites,
  getLocalSaveFavorites,
  setLocalFavorites,
} from "@/services/localFavorites";
import { getPodcast } from "@/api/podcast";

export default function useFavorites() {
  const { user, isUserFetched, favorites, dispatch } = useGlobalStates();
  const { podcastId, episode } = usePlayerState();

  useEffect(() => {
    if (!favorites && isUserFetched) {
      (async () => {
        if (user) {
          try {
            const { data }: { data: ApiResponseType<FavoritePodcastType[]> } =
              await axios.get(`${config.apiBaseUrl}/user/favorites`, {
                withCredentials: true,
              });

            dispatch({ type: "updateFavorite", payload: data.data });
          } catch (error) {
            dispatch({ type: "updateFavorite", payload: [] });
            if (isAxiosError(error)) {
              console.error(error.message);
            }
          }
        } else {
          const favorites = await getLocalFavorites();
          dispatch({ type: "updateFavorite", payload: favorites });
        }
      })();
    }
  }, [favorites, user, isUserFetched, dispatch]);

  const handleFavorite = async () => {
    if (!podcastId || !episode) {
      console.error("Episode is not playing");
      return;
    }
    if (!episode.enclosure) {
      console.error("Streaming link is not available for this episode");
      return;
    }

    if (user) {
      try {
        const { data }: { data: ApiResponseType<FavoritePodcastType[]> } =
          await axios.post(
            `${config.apiBaseUrl}/user/toggle-favorite`,
            {
              podcastId,
              episode,
            },
            {
              withCredentials: true,
            }
          );

        if (data.success) {
          dispatch({ type: "updateFavorite", payload: data.data });
        }
      } catch (error) {
        if (isAxiosError(error)) {
          console.error(error.message);
        }
      }
    } else {
      if (favorites) {
        const prevSaveLocalFavorites = getLocalSaveFavorites();
        const isAlreadyFav: boolean =
          favorites.findIndex(
            (fav) => fav.episodeContent.guid === episode.guid
          ) !== -1;

        if (isAlreadyFav) {
          setLocalFavorites(
            prevSaveLocalFavorites.filter(
              (fav) => fav.episodeContent.guid !== episode.guid
            )
          );
          dispatch({
            type: "updateFavorite",
            payload: favorites.filter(
              (fav) => fav.episodeContent.guid !== episode.guid
            ),
          });
        } else {
          const favoriteId = Date.now().toString();
          setLocalFavorites([
            { _id: favoriteId, podcastId, episodeContent: episode },
            ...prevSaveLocalFavorites,
          ]);

          const podcast = await getPodcast(podcastId);
          if (podcast) {
            dispatch({
              type: "updateFavorite",
              payload: [
                { _id: favoriteId, episodeContent: episode, podcast },
                ...favorites,
              ],
            });
          }
        }
      }
    }
  };

  return { favorites, handleFavorite };
}
