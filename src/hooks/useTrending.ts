import { useEffect } from "react";
import axios, { isAxiosError } from "axios";
import { useGlobalStates } from "@/providers/globalStates-provider";
import config from "@/config";
import { PodcastItemType } from "@/@types/podcast";
import { ApiResponseType } from "@/@types/res";

export default function useTrending() {
  const { trending, dispatch } = useGlobalStates();

  useEffect(() => {
    if (!trending) {
      (async () => {
        try {
          const {
            data,
          }: {
            data: ApiResponseType<PodcastItemType[]>;
          } = await axios.get(`${config.apiBaseUrl}/podcast/trending`);

          if (data.success) {
            dispatch({ type: "updateTrending", payload: data.data });
          }
        } catch (error) {
          if (isAxiosError(error)) {
            console.error(error.message);
          }
        }
      })();
    }
  }, [trending, dispatch]);

  return { trending };
}
