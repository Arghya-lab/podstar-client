import { Podcast, Rss } from "lucide-react";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

function PodcastSuggestionBg() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-muted-foreground">
      <TypographyMuted>You Can Search For Anything...</TypographyMuted>
      <div className="flex gap-6 pt-6">
        <div className="flex gap-2 flex-col items-center justify-center">
          <Podcast />
          <TypographySmall>Podcast Name</TypographySmall>
        </div>
        <div className="flex gap-2 flex-col items-center justify-center">
          <Rss />
          <TypographySmall>Rss Feed URL</TypographySmall>
        </div>
      </div>
    </div>
  );
}

export default PodcastSuggestionBg;
