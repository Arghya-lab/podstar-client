import { useEffect } from "react";
import { useGlobalStates } from "@/providers/globalStates-provider";
import axios, { isAxiosError } from "axios";
import { PodcastItemType } from "@/@types/podcast";
import config from "@/config";
import { ApiResponseType } from "@/@types/res";
import {
  getLocalSubscriptionIds,
  getLocalSubscriptions,
  setLocalSubscriptionIds,
} from "@/services/localSubscriptions";
import { getPodcast } from "@/api/podcast";

export default function useSubscriptions() {
  const { user, isUserFetched, subscriptions, dispatch } = useGlobalStates();

  useEffect(() => {
    if (!subscriptions && isUserFetched) {
      (async () => {
        if (user) {
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
            dispatch({
              type: "updateSubscriptions",
              payload: [],
            });
            if (isAxiosError(error)) {
              console.error(error.message);
            }
          }
        } else {
          const subscriptions = await getLocalSubscriptions();
          dispatch({
            type: "updateSubscriptions",
            payload: subscriptions,
          });
        }
      })();
    }
  }, [subscriptions, user, isUserFetched, dispatch]);

  const handleSubscribe = async (id: string) => {
    if (user) {
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
    } else {
      const prevLocalSubscriptions = getLocalSubscriptionIds();
      let localSubscriptions = [];

      if (prevLocalSubscriptions.includes(id)) {
        localSubscriptions = prevLocalSubscriptions.filter(
          (subId) => subId !== id
        );
        if (subscriptions) {
          dispatch({
            type: "updateSubscriptions",
            payload: subscriptions.filter((sub) => sub._id !== id),
          });
        }
      } else {
        localSubscriptions = [id, ...prevLocalSubscriptions];
        const subscriptionData = await getPodcast(id);

        if (subscriptions && subscriptionData) {
          dispatch({
            type: "updateSubscriptions",
            payload: [subscriptionData, ...subscriptions],
          });
        }
      }

      setLocalSubscriptionIds(localSubscriptions);
    }
  };

  return { subscriptions, handleSubscribe };
}
