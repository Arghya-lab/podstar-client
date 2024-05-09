import { cn } from "@/lib/utils";
import { usePlayerState } from "@/providers/playerState-provider";

function PlayDuration({ size = "small" }: { size?: "small" | "large" }) {
  const { formattedDuration } = usePlayerState();
  return (
    <span
      className={cn(
        "font-medium font-nunito",
        size === "large" ? "text-sm" : "text-xs"
      )}>
      {formattedDuration}
    </span>
  );
}

export default PlayDuration;
