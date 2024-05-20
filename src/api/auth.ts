import axios, { isAxiosError } from "axios";
import config from "@/config";
import { ApiResponseType, SettingsType, UserType } from "@/@types/res";

export async function getUser() {
  try {
    const {
      data,
    }: {
      data: ApiResponseType<{ user: UserType; settings: SettingsType }>;
    } = await axios.get(`${config.apiBaseUrl}/user`, {
      withCredentials: true,
    });

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("user not login");
    }
  }
}
