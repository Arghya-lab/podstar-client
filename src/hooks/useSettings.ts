import axios, { isAxiosError } from "axios";
import { useGlobalStates } from "@/providers/globalStates-provider";
import config from "@/config";
import { ApiResponseType, SettingsType } from "@/@types/res";
import {
  setLocalForwardInterval,
  setLocalPlaybackSpeed,
  setLocalRewindInterval,
} from "@/services/localSettings";

export default function useSettings() {
  const { user, settings, dispatch } = useGlobalStates();

  const updatePlaybackSpeed = async (val: number) => {
    if (user) {
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
    } else {
      const settings = setLocalPlaybackSpeed(val);
      dispatch({ type: "updateSettings", payload: settings });
    }
  };

  const updateRewindInterval = async (val: number) => {
    if (user) {
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
    } else {
      const settings = setLocalRewindInterval(val);
      dispatch({ type: "updateSettings", payload: settings });
    }
  };

  const updateForwardInterval = async (val: number) => {
    if (user) {
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
    } else {
      const settings = setLocalForwardInterval(val);
      dispatch({ type: "updateSettings", payload: settings });
    }
  };

  return {
    settings,
    updatePlaybackSpeed,
    updateRewindInterval,
    updateForwardInterval,
  };
}
