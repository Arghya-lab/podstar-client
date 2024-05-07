import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getPodcastInfo } from "@/api";
import EpisodesSection from "@/components/EpisodesSection";
import PodcastInfoSection from "@/components/PodcastInfoSection";
import { getPodcastInfoType } from "@/@types/res";
import PodcastInfoSectionRapper from "@/components/PodcastInfoSectionRapper";
import { useGlobalStates } from "@/providers/globalStates-provider";
import useWindowSize from "@/hooks/useWindowSize";

export const PodcastInfoLoader: LoaderFunction = async ({ params }) => {
  const id = params.id;
  if (id) {
    return (await getPodcastInfo(id)) || null;
  }
  return null;
};

function PodcastInfoRoute() {
  const { windowWidth } = useWindowSize();
  const { isPodcastCollapsibleOpen } = useGlobalStates();
  const data = useLoaderData() as getPodcastInfoType | null;

  console.log(data);

  return (
    <main className="flex flex-1 flex-col lg:flex-row">
      <PodcastInfoSectionRapper
        title={data?.podcast?.title || data?.itunes?.trackName}>
        <PodcastInfoSection podcast={data?.podcast} itunes={data?.itunes} />
      </PodcastInfoSectionRapper>
      {(!isPodcastCollapsibleOpen || windowWidth >= 1024) && (
        <EpisodesSection
          episodes={data?.episodes}
          imgUrl={data?.podcast?.image?.url}
        />
      )}
    </main>
  );
}

export default PodcastInfoRoute;
