import { PlayerActionType, PlayerStateType } from "@/@types/playerState";
import getFormattedPlayerTime from "@/utils/getFormattedPlayerTime";
import timeStampParser from "@/utils/timeStampParser";
import { convert } from "html-to-text";

export default function playerStateReducer(
  state: PlayerStateType,
  action: PlayerActionType
): PlayerStateType {
  switch (action.type) {
    case "setNewEpisode":
      return {
        ...state,
        episode: action.payload.episode,
        epImgUrl: action.payload.epImgUrl || "",
        podcastId: action.payload.podcastId,
        playing: false,
        muted: false,
        playingCanceled: false,
        timeStamps: timeStampParser(
          convert(action.payload.episode.contentEncoded)
        ),
        played: 0,
        formattedCurrentTime: "00:00",
        formattedRemainTime: "00:00",
        duration: 0,
        formattedDuration: "00:00",
        loaded: 0,
        buffering: false,
      };
      break;
    case "togglePlayPause":
      return { ...state, playing: !state.playing };
      break;
    case "toggleMute":
      return { ...state, muted: !state.muted };
      break;
    case "pauseAudio":
      return { ...state, playing: false };
      break;
    case "playAudio":
      return { ...state, playing: true };
      break;
    case "setAudioDuration":
      return {
        ...state,
        duration: action.payload,
        formattedDuration: getFormattedPlayerTime(action.payload),
      };
      break;
    case "changePlaybackRate":
      return { ...state, playbackRate: action.payload };
      break;
    case "setBuffering":
      return { ...state, buffering: true };
      break;
    case "setStopBuffering":
      return { ...state, buffering: false };
      break;
    case "updateProgress":
      return {
        ...state,
        ...action.payload,
        formattedCurrentTime: getFormattedPlayerTime(
          action.payload.played * state.duration,
          state.duration
        ),
        formattedRemainTime: getFormattedPlayerTime(
          (1 - action.payload.played) * state.duration,
          state.duration
        ),
      };
      break;
    case "updateVolume":
      return {
        ...state,
        volume: action.payload,
      };
      break;
    case "updateFullScreen":
      return {
        ...state,
        playerFullScreen: action.payload,
      };
      break;
    case "toggleFormattedPlayedTimeType":
      return {
        ...state,
        formattedPlayedTimeType:
          state.formattedPlayedTimeType === "current" ? "remain" : "current",
      };
      break;
    case "cancelPlaying":
      return {
        ...state,
        playingCanceled: true,
        episode: null,
        epImgUrl: "",
        playing: false,
        formattedCurrentTime: "00:00",
        formattedRemainTime: "00:00",
        formattedDuration: "00:00",
        buffering: false,
        playerFullScreen: false,
        timeStamps: [],
      };
      break;

    default:
      return state;
      break;
  }
}
