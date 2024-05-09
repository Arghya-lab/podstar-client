import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

function EpLikeBtn({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full p-1.5 hover:bg-transparent",
        size === "small" ? "h-8 w-8" : "h-9 w-9"
      )}
      onClick={() => console.log("liked")}>
      <Heart className="opacity-75 hover:opacity-90" />
    </Button>
  );
}

export default EpLikeBtn;
