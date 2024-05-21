import { ChangeEvent, useState } from "react";
import Fuse from "fuse.js";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { getPodcastInfo } from "@/api/podcast";
import { useGlobalStates } from "@/providers/globalStates-provider";
import useWindowSize from "@/hooks/useWindowSize";
import { Input } from "@/components/ui/input";
import { PodcastInfoType } from "@/@types/podcast";
import PodcastInfoSectionRapper from "@/components/podcastComponents/PodcastInfoSectionRapper";
import PodcastInfoSection from "@/components/podcastComponents/PodcastInfoSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import EpisodeItem from "@/components/micro/EpisodeItem";
import { EpisodeType } from "@/@types/podcast";

export const PodcastRouteLoader: LoaderFunction = async ({ params }) => {
  const id = params.id;
  if (id) {
    const data = await getPodcastInfo(id);
    return data ? { data, id } : null;
  }
  return null;
};

function PodcastRoute() {
  const { windowWidth } = useWindowSize();
  const { isPodcastCollapsibleOpen } = useGlobalStates();
  const res = useLoaderData() as {
    data: PodcastInfoType;
    id: string;
  } | null;

  // console.log(res?.data);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeType[]>(
    res?.data.episodes || []
  );

  if (!res?.data) return null;
  const { data, id } = res;

  const fuse = new Fuse(data.episodes || [], { keys: ["title"] });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);

    if (data.episodes && newQuery.length > 2) {
      const result = fuse.search(newQuery).map((data) => data.item);

      setFilteredEpisodes(result);
    } else {
      setFilteredEpisodes(data.episodes || []);
    }
  };

  return (
    <main className="flex flex-1 flex-col lg:flex-row">
      <ScrollArea className="lg:w-96">
        <PodcastInfoSectionRapper
          title={data.podcast.title || data.itunes?.trackName}>
          <PodcastInfoSection
            id={data._id}
            podcast={data.podcast}
            itunes={data.itunes}
          />
        </PodcastInfoSectionRapper>
      </ScrollArea>
      {(!isPodcastCollapsibleOpen || windowWidth >= 1024) && (
        <div className="flex flex-col flex-1">
          <div className="p-4 pb-0">
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for Episodes..."
            />
          </div>
          <section className="p-4 flex-1 flex flex-col">
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  itemCount={filteredEpisodes.length}
                  itemSize={104}
                  width={width}>
                  {({ index, style }) => (
                    <EpisodeItem
                      key={filteredEpisodes[index].guid}
                      imgUrl={data.podcast.image?.url}
                      episode={filteredEpisodes[index]}
                      podcastId={id}
                      style={style}
                    />
                  )}
                </List>
              )}
            </AutoSizer>
          </section>
        </div>
      )}
    </main>
  );
}

export default PodcastRoute;
