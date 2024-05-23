import { PodcastItemType } from "@/@types/podcast";
import { getPodcast } from "@/api/podcast";

export const localSubscriptionsKey = "Subscriptions";

export function setLocalSubscriptionIds(subscriptions: string[]) {
  localStorage.setItem(localSubscriptionsKey, JSON.stringify(subscriptions));
}

export function getLocalSubscriptionIds(): string[] {
  const storedSubscriptions = localStorage.getItem(localSubscriptionsKey);

  if (!storedSubscriptions) {
    setLocalSubscriptionIds([]);
    return [];
  }

  try {
    const subscriptionIds: string[] = JSON.parse(storedSubscriptions);

    return subscriptionIds;
  } catch (error) {
    console.error("Failed to parse settings from localStorage:", error);
    setLocalSubscriptionIds([]);
    return [];
  }
}

export async function getLocalSubscriptions(): Promise<PodcastItemType[]> {
  const subscriptionIds = getLocalSubscriptionIds();

  const res = await Promise.allSettled(
    subscriptionIds.map((subId) => getPodcast(subId))
  );

  return res
    .filter(
      (item): item is PromiseFulfilledResult<PodcastItemType> =>
        item.status === "fulfilled" && item.value != undefined
    )
    .map((item) => item.value);
}
