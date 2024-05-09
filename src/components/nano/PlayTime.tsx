import { cn } from "@/lib/utils";
import { usePlayerState } from "@/providers/playerState-provider";

function PlayTime({ size = "small" }: { size?: "small" | "large" }) {
  const {
    formattedCurrentTime,
    formattedPlayedTimeType,
    formattedRemainTime,
    dispatch,
  } = usePlayerState();
  return (
    <span
      className={cn(
        "font-medium font-nunito",
        size === "large" ? "text-sm" : "text-xs"
      )}
      onClick={() => dispatch({ type: "toggleFormattedPlayedTimeType" })}>
      {formattedPlayedTimeType === "current"
        ? formattedCurrentTime
        : formattedRemainTime}
    </span>
  );
}

export default PlayTime;
