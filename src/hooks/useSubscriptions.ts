import { useEffect } from "react";
import { useGlobalStates } from "@/providers/globalStates-provider";
import axios, { isAxiosError } from "axios";
import { PodcastItemType } from "@/@types/podcast";
import config from "@/config";
import { ApiResponseType } from "@/@types/res";

export default function useSubscription() {
  const { subscriptions, user, dispatch } = useGlobalStates();

  useEffect(() => {
    if (!subscriptions && user) {
      (async () => {
        try {
          const { data }: { data: ApiResponseType<PodcastItemType[]> } =
            await axios.get(`${config.apiBaseUrl}/user/subscriptions`, {
              withCredentials: true,
            });

          dispatch({
            type: "updateSubscriptions",
            payload: data.data,
          });
        } catch (error) {
          if (isAxiosError(error)) {
            console.error(error.message);
          }
        }
      })();
    }
  }, [subscriptions, user, dispatch]);

  const handleSubscribe = async (id: string) => {
    try {
      const {
        data,
      }: {
        data: ApiResponseType<PodcastItemType[]>;
      } = await axios.post(
        `${config.apiBaseUrl}/user/toggle-subscribe/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        dispatch({ type: "updateSubscriptions", payload: data.data });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.message);
      }
    }
  };

  return { subscriptions, handleSubscribe };
}
