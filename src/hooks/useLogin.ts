import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import useSetUser from "@/hooks/useSetUser";

export default function useLogin() {
  const navigate = useNavigate();
  const setUser = useSetUser();

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
        await setUser();
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
