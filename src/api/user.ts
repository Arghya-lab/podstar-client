import axios, { isAxiosError } from "axios";
import config from "@/config";
import { GetSubscriptionsResType } from "@/@types/res";

export async function getSubscriptions() {
  try {
    const { data }: { data: GetSubscriptionsResType } = await axios.get(
      `${config.apiBaseUrl}/user/subscriptions`,
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
  }
}
