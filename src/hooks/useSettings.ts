import axios, { isAxiosError } from "axios";
import { useGlobalStates } from "@/providers/globalStates-provider";
import config from "@/config";
import { ApiResponseType, SettingsType } from "@/@types/res";

export default function useSettings() {
  const { settings, dispatch } = useGlobalStates();

  const updatePlaybackSpeed = async (val: number) => {
    try {
      const {
        data,
      }: {
        data: ApiResponseType<SettingsType>;
      } = await axios.patch(
        `${config.apiBaseUrl}/user/setting/playback-speed`,
        {
          playbackSpeed: val,
        },
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        dispatch({ type: "updateSettings", payload: data.data });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.message);
      }
    }
  };

  const updateRewindInterval = async (val: number) => {
    try {
      const {
        data,
      }: {
        data: ApiResponseType<SettingsType>;
      } = await axios.patch(
        `${config.apiBaseUrl}/user/setting/rewind-interval`,
        {
          rewindInterval: val,
        },
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        dispatch({ type: "updateSettings", payload: data.data });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.message);
      }
    }
  };

  const updateForwardInterval = async (val: number) => {
    try {
      const {
        data,
      }: {
        data: ApiResponseType<SettingsType>;
      } = await axios.patch(
        `${config.apiBaseUrl}/user/setting/forward-interval`,
        {
          forwardInterval: val,
        },
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        dispatch({ type: "updateSettings", payload: data.data });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.message);
      }
    }
  };

  return {
    settings,
    updatePlaybackSpeed,
    updateRewindInterval,
    updateForwardInterval,
  };
}
