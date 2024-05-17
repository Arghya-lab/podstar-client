import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { PodcastSuggestionType } from "@/@types/podcast";
import PodcastSuggestionBg from "@/components/PodcastSuggestionBg";
import { fetchPodcastSuggestion, searchPodcastByUrl } from "@/api/podcast";
import isValidUrl from "@/utils/isValidUrl";
import PodcastSuggestionList from "@/components/PodcastSuggestionList";
import MonaLisaLoadingAnimation from "@/components/ui/MonaLisaLoadingAnimation";
import { TypographyLarge } from "@/components/ui/typography";

let timeoutId: NodeJS.Timeout;

function SearchRoute() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [podcasts, setPodcasts] = useState<PodcastSuggestionType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const debounce = (func: () => void, delay: number) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func();
      }, delay);
    };

    const fetchPodcastsList = async () => {
      setPodcasts([]);
      setLoading(true);

      if (isValidUrl(searchQuery)) {
        const res = await searchPodcastByUrl(searchQuery);
        if (res) {
          setPodcasts([res]);
          setPage(1);
          setHasMore(false);
        }
        setIsDataFetched(true);
      } else {
        if (searchQuery.length >= 3) {
          const res = await fetchPodcastSuggestion({ searchQuery });
          if (res?.data) {
            setPodcasts(res.data);
            setPage(res.page);
            setHasMore(res.hasNextPage);
          }
          setIsDataFetched(true);
        }
      }

      if (searchQuery.length === 0) setIsDataFetched(false);
      setLoading(false);
    };

    debounce(fetchPodcastsList, 500);
  }, [searchQuery]);

  const fetchMoreData = async () => {
    const res = await fetchPodcastSuggestion({ searchQuery, page: page + 1 });

    if (res?.data) {
      setPage(res.page);
      setHasMore(res.hasNextPage);
      setPodcasts((pre) => [...pre, ...res.data]);
    }
  };

  return (
    <main className="flex-1 p-4 pr-1 flex flex-col">
      <div className="pr-3">
        <Input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Podcast or Enter Rss feed URL..."
        />
      </div>
      {!isDataFetched && !loading && <PodcastSuggestionBg />}
      {loading && (
        <div className="flex-1 flex justify-center items-center">
          <div>
            <MonaLisaLoadingAnimation />
          </div>
        </div>
      )}
      {isDataFetched && !loading && podcasts.length === 0 && (
        <div className="flex-1 flex items-center justify-center">
          <TypographyLarge>
            Podcast suggestion not found for your query.
          </TypographyLarge>
        </div>
      )}
      {isDataFetched && (
        <PodcastSuggestionList
          podcasts={podcasts}
          hasMore={hasMore}
          fetchMoreData={fetchMoreData}
        />
      )}
    </main>
  );
}

export default SearchRoute;
