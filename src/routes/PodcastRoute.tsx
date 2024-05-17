import { ChangeEvent, useState } from "react";
import Fuse from "fuse.js";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getPodcastInfo } from "@/api/podcast";
import EpisodesSection from "@/components/EpisodesSection";
import PodcastInfoSection from "@/components/PodcastInfoSection";
import { getPodcastInfoType } from "@/@types/res";
import PodcastInfoSectionRapper from "@/components/PodcastInfoSectionRapper";
import { useGlobalStates } from "@/providers/globalStates-provider";
import useWindowSize from "@/hooks/useWindowSize";
import { Input } from "@/components/ui/input";
import { EpisodeType } from "@/@types/podcast";

export const PodcastRouteLoader: LoaderFunction = async ({ params }) => {
  const id = params.id;
  if (id) {
    return (await getPodcastInfo(id)) || null;
  }
  return null;
};

function PodcastRoute() {
  const { windowWidth } = useWindowSize();
  const { isPodcastCollapsibleOpen } = useGlobalStates();
  const data = useLoaderData() as getPodcastInfoType | null;
  console.log(data);

  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeType[]>(
    data?.episodes || []
  );
  const [searchQuery, setSearchQuery] = useState("");

  if (!data) return null;

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
      <PodcastInfoSectionRapper
        title={data.podcast?.title || data.itunes?.trackName}>
        <PodcastInfoSection
          id={data._id}
          podcast={data.podcast}
          itunes={data.itunes}
        />
      </PodcastInfoSectionRapper>
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
          <EpisodesSection
            episodes={filteredEpisodes}
            imgUrl={data.podcast?.image?.url}
          />
        </div>
      )}
    </main>
  );
}

export default PodcastRoute;
