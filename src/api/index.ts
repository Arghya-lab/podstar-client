import axios, { isAxiosError } from "axios";
import config from "@/config";
import { PodcastSuggestionType } from "@/@types/podcast";
import { getPodcastInfoType } from "@/@types/res";

export async function fetchPodcastSuggestion({
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
      data: {
        data: PodcastSuggestionType[];
        page: number;
        hasNextPage: boolean;
      };
    } = await axios.get(`${config.apiBaseUrl}/podcast`, {
      params: {
        query: searchQuery,
        page,
        perPage,
      },
    });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
  }
}

export async function searchPodcastByUrl(url: string) {
  try {
    const { data }: { data: PodcastSuggestionType } = await axios.post(
      `${config.apiBaseUrl}/podcast/add`,
      {
        feedUrl: url,
      }
    );

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
  }
}

export async function getPodcastInfo(id: string) {
  try {
    const { data }: { data: getPodcastInfoType } = await axios.get(
      `${config.apiBaseUrl}/podcast/info`,
      {
        params: {
          id,
        },
      }
    );

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
  }
}
