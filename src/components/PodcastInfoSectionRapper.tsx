import { ReactNode } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import useWindowSize from "@/hooks/useWindowSize";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useGlobalStates } from "@/providers/globalStates-provider";

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
        className="pt-4 space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="font-semibold text-lg">
            {title || "Expand for more data"}
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="p-4">{children}</CollapsibleContent>
      </Collapsible>
    );
  }

  return <ScrollArea className="lg:w-64 p-4">{children}</ScrollArea>;
}

export default PodcastInfoSectionRapper;
