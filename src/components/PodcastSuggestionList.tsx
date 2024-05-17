import PodcastSuggestionItem from "@/components/micro/PodcastSuggestionItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PodcastSuggestionType } from "@/@types/podcast";

function PodcastSuggestionList({
  podcasts,
  hasMore,
  fetchMoreData,
}: {
  podcasts: PodcastSuggestionType[];
  hasMore: boolean;
  fetchMoreData: () => unknown;
}) {
  return podcasts.length === 0 ? null : (
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
