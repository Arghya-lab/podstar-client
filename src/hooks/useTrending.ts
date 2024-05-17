import { useEffect } from "react";
import { getTrending } from "@/api/podcast";
import { useGlobalStates } from "@/providers/globalStates-provider";

export default function useTrending() {
  const { trending, dispatch } = useGlobalStates();

  useEffect(() => {
    if (!trending) {
      (async () => {
        const res = await getTrending();
        if (res) {
          dispatch({ type: "updateTrending", payload: res });
        }
      })();
    }
  }, [trending, dispatch]);

  return { trending };
}
