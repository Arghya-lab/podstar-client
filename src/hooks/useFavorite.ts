import { FavoritePodcastType } from "@/@types/podcast";
import { ApiResponseType } from "@/@types/res";
import config from "@/config";
import { useGlobalStates } from "@/providers/globalStates-provider";
import { usePlayerState } from "@/providers/playerState-provider";
import axios, { isAxiosError } from "axios";
import { useEffect } from "react";

export default function useFavorite() {
  const { favorites, user, dispatch } = useGlobalStates();
  const { podcastId, episode } = usePlayerState();

  useEffect(() => {
    if (!favorites && user) {
      (async () => {
        try {
          const { data }: { data: ApiResponseType<FavoritePodcastType[]> } =
            await axios.get(`${config.apiBaseUrl}/user/favorites`, {
              withCredentials: true,
            });

          dispatch({ type: "updateFavorite", payload: data.data });
        } catch (error) {
          if (isAxiosError(error)) {
            console.error(error.message);
          }
        }
      })();
    }
  }, [favorites, user, dispatch]);

  const handleFavorite = async () => {
    if (!podcastId || !episode) {
      console.error("Episode is not playing");
      return;
    }
    if (!episode.enclosure) {
      console.error("Streaming link is not available for this episode");
      return;
    }

    try {
      const { data }: { data: ApiResponseType<FavoritePodcastType[]> } =
        await axios.post(
          `${config.apiBaseUrl}/user/toggle-favorite`,
          {
            podcastId,
            title: episode.title || episode.itunesTitle,
            description:
              episode.contentEncoded ||
              episode.description ||
              episode.itunesSummary,
            enclosure: episode.enclosure,
            guid: episode.guid,
            duration: episode.itunesDuration,
            pubDate: episode.pubDate,
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
  };

  return { favorites, handleFavorite };
}
