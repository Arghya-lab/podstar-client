import ReactPlayer from "react-player";
import { usePlayerState } from "@/providers/playerState-provider";
import { useGlobalStates } from "@/providers/globalStates-provider";

function AudioPlayer() {
  const {
    episode,
    playing,
    volume,
    muted,
    buffering,
    audioPlayerRef,
    dispatch,
  } = usePlayerState();
  const { settings } = useGlobalStates();

  return (
    <ReactPlayer
      ref={audioPlayerRef}
      style={{ visibility: "hidden" }}
      width="auto"
      height="auto"
      url={episode?.enclosure?.url || ""}
      playing={playing}
      volume={volume}
      muted={muted}
      playbackRate={settings.playbackSpeed}
      onDuration={(duration) => {
        dispatch({ type: "setAudioDuration", payload: duration });
      }}
      onProgress={(value) =>
        dispatch({
          type: "updateProgress",
          payload: { loaded: value.loaded, played: value.played },
        })
      }
      onReady={() => dispatch({ type: "playAudio" })}
      onPlay={() => dispatch({ type: "playAudio" })}
      onPause={() => dispatch({ type: "pauseAudio" })}
      onEnded={() => {
        dispatch({ type: "pauseAudio" });
      }}
      onStart={() => {
        dispatch({ type: "playAudio" });
        console.log("onstart");
      }}
      onSeek={() => {
        if (buffering == true) {
          dispatch({ type: "setStopBuffering" });
        }
      }}
      onBuffer={() => dispatch({ type: "setBuffering" })}
      onBufferEnd={() => dispatch({ type: "setStopBuffering" })}
      onError={(e) => console.log("onError", e)}
      config={{ file: { forceAudio: true } }}
    />
  );
}

export default AudioPlayer;
