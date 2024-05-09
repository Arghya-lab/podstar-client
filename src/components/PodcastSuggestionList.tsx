import PodcastSuggestionItem from "@/components/micro/PodcastSuggestionItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyLarge } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { PodcastSuggestionType } from "@/@types/podcast";
import MonaLisaLoadingAnimation from "@/components/ui/MonaLisaLoadingAnimation";

function PodcastSuggestionList({
  podcasts,
  hasMore,
  loading,
  fetchMoreData,
}: {
  podcasts: PodcastSuggestionType[];
  hasMore: boolean;
  loading: boolean;
  fetchMoreData: () => unknown;
}) {
  if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div>
          <MonaLisaLoadingAnimation />
        </div>
      </div>
    );
  }

  return podcasts.length === 0 ? (
    <div className="flex-1 flex items-center justify-center">
      <TypographyLarge>
        Podcast suggestion not found for your query.
      </TypographyLarge>
    </div>
  ) : (
    <ScrollArea className="flex-1 pt-4">
      {podcasts.map((podcast) => (
        <PodcastSuggestionItem key={podcast._id} data={podcast} />
      ))}
      {hasMore && (
        <div className="flex justify-center mt-8 mb-4">
          <Button onClick={() => fetchMoreData()}>Load More Podcast</Button>
        </div>
      )}
    </ScrollArea>
  );
}

export default PodcastSuggestionList;
