import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFavorite from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

function EpFavoriteBtn({
  size = "small",
  guid,
}: {
  size?: "small" | "large";
  guid: string;
}) {
  const { favorites, handleFavorite } = useFavorite();

  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full p-1.5 hover:bg-transparent",
        size === "small" ? "h-8 w-8" : "h-9 w-9"
      )}
      onClick={handleFavorite}>
      <Heart
        className="opacity-75 hover:opacity-90"
        fill={
          favorites &&
          favorites.map((i) => i.episodeContent.guid).includes(guid)
            ? "hsl(var(--foreground))"
            : ""
        }
      />
    </Button>
  );
}

export default EpFavoriteBtn;
