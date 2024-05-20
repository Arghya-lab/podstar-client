import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useRef,
} from "react";
import ReactPlayer from "react-player";
import { PlayerStateType, PlayerStateContextType } from "@/@types/playerState";
import isMobileDevice from "@/utils/isMobileDevice";
import playerStateReducer from "@/providers/reducers/playerStateReducer";

const defaultPlayerState: PlayerStateType = {
  podcastId: null,
  episode: null,
  epImgUrl: "",
  playing: false,
  volume: isMobileDevice() ? 1 : 0.8, //  value -> 0-1
  muted: false,
  played: 0, //  value -> 0-1
  formattedCurrentTime: "00:00",
  formattedRemainTime: "00:00",
  formattedPlayedTimeType: "current",
  duration: 0,
  formattedDuration: "00:00",
  loaded: 0,
  playbackRate: 1.0,
  buffering: false,
  playerFullScreen: false,
  playingCanceled: true,
  isMobileDevice: isMobileDevice(),
  timeStamps: [],
};

const PlayerStateContext = createContext<PlayerStateContextType>({
  ...defaultPlayerState,
  audioPlayerRef: null,
  handleSkipBack: () => {},
  handleSkipForward: () => {},
  handleSkipTo: () => {},
  dispatch: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayerState = () => useContext(PlayerStateContext);

export function PlayerStateProvider({ children }: { children: ReactNode }) {
  const skipBackSec = 10;
  const skipForwardSec = 10;

  const audioPlayerRef = useRef<ReactPlayer>(null);
  const [state, dispatch] = useReducer(playerStateReducer, defaultPlayerState);

  const handleSkipBack = () => {
    if (audioPlayerRef?.current) {
      audioPlayerRef.current.seekTo(
        state.played * state.duration - skipBackSec
      );
    }
  };

  const handleSkipForward = () => {
    if (audioPlayerRef?.current) {
      audioPlayerRef.current.seekTo(
        state.played * state.duration + skipForwardSec
      );
    }
  };

  const handleSkipTo = (amount: number, type?: "seconds" | "fraction") => {
    if (audioPlayerRef?.current) {
      audioPlayerRef.current.seekTo(amount, type);
    }
  };

  return (
    <PlayerStateContext.Provider
      value={{
        ...state,
        audioPlayerRef,
        handleSkipBack,
        handleSkipForward,
        handleSkipTo,
        dispatch,
      }}>
      {children}
    </PlayerStateContext.Provider>
  );
}
