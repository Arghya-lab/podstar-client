import { Dispatch, RefObject } from "react";
import ReactPlayer from "react-player";
import { EpisodeType } from "./podcast";

export interface timeStampType {
  value: number;
  readableTimestamp: string;
  description: string;
}

export interface PlayerStateType {
  podcastId: string | null;
  episode: EpisodeType | null;
  epImgUrl: string;
  playing: boolean;
  volume: number; //  value -> 0-1
  muted: boolean;
  played: number; //  value -> 0-1
  formattedCurrentTime: string;
  formattedRemainTime: string;
  formattedPlayedTimeType: "current" | "remain";
  duration: number;
  formattedDuration: string;
  loaded: number;
  playbackRate: number;
  buffering: boolean;
  playerFullScreen: boolean;
  playingCanceled: boolean;
  isMobileDevice: boolean;
  timeStamps: timeStampType[];
}

export interface PlayerStateContextType extends PlayerStateType {
  audioPlayerRef: RefObject<ReactPlayer> | null;
  handleSkipBack: () => void;
  handleSkipForward: () => void;
  handleSkipTo: (amount: number, type?: "seconds" | "fraction") => void;
  dispatch: Dispatch<PlayerActionType>;
}

interface setNewEpisodeType {
  type: "setNewEpisode";
  payload: {
    episode: EpisodeType;
    epImgUrl?: string;
    podcastId: string;
  };
}
interface togglePlayPauseType {
  type: "togglePlayPause";
}
interface toggleMuteType {
  type: "toggleMute";
}
interface pauseAudioType {
  type: "pauseAudio";
}
interface playAudioType {
  type: "playAudio";
}
interface setAudioDurationType {
  type: "setAudioDuration";
  payload: number;
}
interface changePlaybackRateType {
  type: "changePlaybackRate";
  payload: number;
}
interface setBufferingType {
  type: "setBuffering";
}
interface setStopBufferingType {
  type: "setStopBuffering";
}
interface updateProgressType {
  type: "updateProgress";
  payload: { loaded?: number; played: number };
}
interface updateVolumeType {
  type: "updateVolume";
  payload: number;
}
interface updateFullScreenType {
  type: "updateFullScreen";
  payload: boolean;
}
interface cancelPlayingType {
  type: "cancelPlaying";
}
interface toggleFormattedPlayedTimeTypeType {
  type: "toggleFormattedPlayedTimeType";
}

export type PlayerActionType =
  | setNewEpisodeType
  | togglePlayPauseType
  | toggleMuteType
  | pauseAudioType
  | playAudioType
  | setAudioDurationType
  | changePlaybackRateType
  | setBufferingType
  | setStopBufferingType
  | updateProgressType
  | updateVolumeType
  | updateFullScreenType
  | cancelPlayingType
  | toggleFormattedPlayedTimeTypeType;
