import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { getUser } from "@/api/auth";
import { useGlobalStates } from "@/providers/globalStates-provider";

export default function useLogin() {
  const navigate = useNavigate();
  const { dispatch } = useGlobalStates();

  const handleLogin = async (
    email: string,
    password: string,
    redirectUrl: string
  ) => {
    try {
      const { data }: { data: { success: boolean; message: string } } =
        await axios.post(
          `${config.apiBaseUrl}/auth/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );

      if (data.success) {
        const res = await getUser();
        if (res && res.user) {
          dispatch({ type: "setUser", payload: res.user });
        }
        navigate(redirectUrl);
      } else {
        console.log("error in login", data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  return handleLogin;
}
