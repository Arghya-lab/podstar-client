import { SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePlayerState } from "@/providers/playerState-provider";
import { cn } from "@/lib/utils";

function EpSkipForwardBtn({ size = "small" }: { size?: "small" | "large" }) {
  const { handleSkipForward } = usePlayerState();
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full p-1.5 hover:bg-transparent",
        size === "small" ? "h-8 w-8" : "h-12 w-12"
      )}
      onClick={handleSkipForward}>
      <SkipForward className="fill-foreground opacity-75 hover:opacity-90" />
    </Button>
  );
}

export default EpSkipForwardBtn;
