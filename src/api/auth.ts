import { UserResType } from "@/@types/res";
import config from "@/config";
import axios, { isAxiosError } from "axios";

export async function getUser() {
  try {
    const {
      data,
    }: {
      data: UserResType;
    } = await axios.get(`${config.apiBaseUrl}/auth/user`, {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("user not login");
    }
  }
}
