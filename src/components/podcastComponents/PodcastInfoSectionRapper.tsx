import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import useWindowSize from "@/hooks/useWindowSize";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useGlobalStates } from "@/providers/globalStates-provider";
import { Info, X } from "lucide-react";

function PodcastInfoSectionRapper({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const { windowWidth } = useWindowSize();
  const { isPodcastCollapsibleOpen, dispatch } = useGlobalStates();

  if (windowWidth < 1024) {
    return (
      <Collapsible
        open={isPodcastCollapsibleOpen}
        onOpenChange={() => {
          dispatch({ type: "togglePodcastCollapsible" });
        }}
        className="space-y-2">
        <div className="flex items-center justify-between space-x-4 p-4 pb-0">
          <h4 className="font-semibold text-lg">
            {title || "Expand for podcast info"}
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isPodcastCollapsibleOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Info className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>{children}</CollapsibleContent>
      </Collapsible>
    );
  }

  return children;
}

export default PodcastInfoSectionRapper;
