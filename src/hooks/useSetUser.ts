import { UserResType } from "@/@types/res";
import config from "@/config";
import { useGlobalStates } from "@/providers/globalStates-provider";
import axios, { isAxiosError } from "axios";

export default function useSetUser() {
  const { dispatch } = useGlobalStates();

  const setUser = async () => {
    try {
      const {
        data,
      }: {
        data: UserResType;
      } = await axios.get(`${config.apiBaseUrl}/auth/user`, {
        withCredentials: true,
      });

      if (data && data.user) {
        dispatch({ type: "setUser", payload: data.user });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("user not login");
      }
    }
  };
  return setUser;
}
