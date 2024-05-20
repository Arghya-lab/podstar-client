import axios, { isAxiosError } from "axios";
import config from "@/config";
import { PodcastInfoType, PodcastItemType } from "@/@types/podcast";
import { ApiResponseType } from "@/@types/res";

export async function searchPodcast({
  searchQuery,
  page,
  perPage,
}: {
  searchQuery?: string;
  page?: number;
  perPage?: number;
}) {
  if (!page) page = 1;
  if (!perPage) perPage = 20;

  try {
    const {
      data,
    }: {
      data: ApiResponseType<{
        result: PodcastItemType[];
        page: number;
        hasNextPage: boolean;
      }>;
    } = await axios.get(`${config.apiBaseUrl}/podcast`, {
      params: {
        query: searchQuery,
        page,
        perPage,
      },
    });

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
  }
}

export async function searchPodcastByUrl(url: string) {
  try {
    const { data }: { data: ApiResponseType<PodcastItemType> } =
      await axios.post(`${config.apiBaseUrl}/podcast/add`, {
        feedUrl: url,
      });

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
  }
}

export async function getPodcastInfo(id: string) {
  try {
    const {
      data,
    }: {
      data: ApiResponseType<PodcastInfoType>;
    } = await axios.get(`${config.apiBaseUrl}/podcast/info`, {
      params: {
        id,
      },
    });

    if (data.success) {
      return data.data;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
  }
}
