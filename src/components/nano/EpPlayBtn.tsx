import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePlayerState } from "@/providers/playerState-provider";
import { Pause, Play } from "lucide-react";

function EpPlayBtn({
  size = "medium",
}: {
  size?: "small" | "medium" | "large";
}) {
  const { playing, dispatch } = usePlayerState();
  const iconSize = size === "small" ? 24 : size === "medium" ? 32 : 40;
  return (
    <Button
      variant="secondary"
      className={cn(
        "rounded-full p-2",
        size === "small"
          ? "h-10 w-10"
          : size === "medium"
          ? "h-12 w-12"
          : "h-16 w-16"
      )}
      onClick={() => {
        dispatch({ type: "togglePlayPause" });
      }}>
      {!playing ? (
        <Play size={iconSize} className="fill-foreground" />
      ) : (
        // : buffering ? (
        //   <LoaderCircle
        //     size={iconSize}
        //     strokeWidth={3}
        //     className="animate-spin"
        //   />)
        <Pause size={iconSize} strokeWidth={1} className="fill-foreground" />
      )}
    </Button>
  );
}

export default EpPlayBtn;
