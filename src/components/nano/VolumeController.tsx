import { usePlayerState } from "@/providers/playerState-provider";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Volume, Volume1, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import useWindowSize from "@/hooks/useWindowSize";

function VolumeController({ size = "small" }: { size?: "small" | "large" }) {
  const { volume, muted, dispatch } = usePlayerState();
  const { windowWidth } = useWindowSize();

  if (windowWidth < 426) return null;

  return (
    <div className="flex items-center gap-2 md:w-4/5 max-w-36 h-full">
      <Button
        variant="ghost"
        className={cn(
          "rounded-full p-1.5 hover:bg-transparent",
          size === "small" ? "h-8 w-8" : "h-9 w-9"
        )}
        onClick={() => dispatch({ type: "toggleMute" })}>
        {muted ? (
          <VolumeX className="opacity-75 hover:opacity-90" />
        ) : volume < 1 / 3 ? (
          <Volume className="opacity-75 hover:opacity-90" />
        ) : volume < 2 / 3 ? (
          <Volume1 className="opacity-75 hover:opacity-90" />
        ) : (
          <Volume2 className="opacity-75 hover:opacity-90" />
        )}
      </Button>
      {windowWidth >= 768 && (
        <Slider
          value={[muted ? 0 : volume]}
          max={1}
          step={0.01}
          onValueChange={(val: number[]) => {
            dispatch({ type: "updateVolume", payload: val[0] });
          }}
        />
      )}
    </div>
  );
}

export default VolumeController;
