import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownToLine } from "lucide-react";

function EpDownloadBtn({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full p-1.5 hover:bg-transparent",
        size === "small" ? "h-8 w-8" : "h-9 w-9"
      )}
      onClick={() => console.log("downloaded")}>
      <ArrowDownToLine className="opacity-75 hover:opacity-90" />
    </Button>
  );
}

export default EpDownloadBtn;
