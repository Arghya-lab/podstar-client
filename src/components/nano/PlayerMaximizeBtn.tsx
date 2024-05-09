import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePlayerState } from "@/providers/playerState-provider";
import { Maximize2 } from "lucide-react";

function PlayerMaximizeBtn({ size = "small" }: { size?: "small" | "large" }) {
  const { dispatch } = usePlayerState();
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full p-1.5 hover:bg-transparent",
        size === "small" ? "h-8 w-8" : "h-9 w-9"
      )}
      onClick={() => dispatch({ type: "updateFullScreen", payload: true })}>
      <Maximize2 className="opacity-75 hover:opacity-90" />
    </Button>
  );
}

export default PlayerMaximizeBtn;
