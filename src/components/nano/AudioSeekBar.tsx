import { Slider } from "@/components/ui/slider";
import { usePlayerState } from "@/providers/playerState-provider";

function AudioSeekBar({ size }: { size?: "small" | "medium" | "large" }) {
  const { played, audioPlayerRef } = usePlayerState();
  return (
    <Slider
      size={size}
      value={[played]}
      onValueChange={(val) => {
        if (audioPlayerRef?.current) {
          audioPlayerRef.current.seekTo(val[0], "fraction");
        }
      }}
      max={1}
      step={0.01}
    />
  );
}

export default AudioSeekBar;
