import { useEffect } from "react";
import { useGlobalStates } from "@/providers/globalStates-provider";
import { getSubscriptions } from "@/api/user";

export default function useSubscription() {
  const { subscriptions, user, dispatch } = useGlobalStates();

  useEffect(() => {
    if (!subscriptions && user) {
      (async () => {
        const res = await getSubscriptions();
        if (res) {
          dispatch({ type: "updateSubscriptions", payload: res.subscriptions });
        }
      })();
    }
  }, [subscriptions, user, dispatch]);

  return { subscriptions };
}
