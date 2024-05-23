import { Link } from "react-router-dom";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePlayerState } from "@/providers/playerState-provider";

function EpDownloadBtn({ size = "small" }: { size?: "small" | "large" }) {
  const { episode } = usePlayerState();

  if (!episode?.enclosure) return null;

  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full p-1.5 hover:bg-transparent",
        size === "small" ? "h-8 w-8" : "h-9 w-9"
      )}
      asChild>
      <Link
        to={episode.enclosure.url}
        download={episode.title || episode.itunesTitle}
        target="_blank">
        <ArrowDownToLine className="opacity-75 hover:opacity-90" />
      </Link>
    </Button>
  );
}

export default EpDownloadBtn;
