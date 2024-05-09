import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePlayerState } from "@/providers/playerState-provider";
import { X } from "lucide-react";

function CancelPlayingBtn({ size = "small" }: { size?: "small" | "large" }) {
  const { dispatch } = usePlayerState();
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full p-1.5 hover:bg-transparent",
        size === "small" ? "h-8 w-8" : "h-9 w-9"
      )}
      onClick={() => dispatch({ type: "cancelPlaying" })}>
      <X className="opacity-75 hover:opacity-90" />
    </Button>
  );
}

export default CancelPlayingBtn;
