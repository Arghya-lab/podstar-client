import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePlayerState } from "@/providers/playerState-provider";
import { LoaderCircle, Pause, Play } from "lucide-react";

function EpPlayBtn({
  size = "medium",
}: {
  size?: "small" | "medium" | "large";
}) {
  const { playing, buffering, loaded, dispatch } = usePlayerState();
  const iconSize = size === "small" ? 24 : size === "medium" ? 32 : 40;
  return (
    <Button
      variant="secondary"
      className={cn(
        "rounded-full relative",
        size === "small"
          ? "h-10 w-10 p-1.5"
          : size === "medium"
          ? "h-12 w-12 p-3"
          : "h-16 w-16 p-4"
      )}
      onClick={() => {
        dispatch({ type: "togglePlayPause" });
      }}>
      {!playing ? (
        <Play size={iconSize} className="fill-foreground" />
      ) : (
        <Pause size={iconSize} strokeWidth={1} className="fill-foreground" />
      )}
      {(buffering || loaded === 0) && (
        <LoaderCircle
          className={cn(
            "rounded-full overflow-clip absolute animate-spin",
            size === "small"
              ? "h-12 w-12"
              : size === "medium"
              ? "h-14 w-14"
              : "h-20 w-20"
          )}
          strokeWidth={1}
        />
      )}
    </Button>
  );
}

export default EpPlayBtn;
