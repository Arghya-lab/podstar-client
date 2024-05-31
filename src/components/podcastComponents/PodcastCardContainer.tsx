import useWindowSize from "@/hooks/useWindowSize";
import { TypographyH3, TypographyLead } from "@/components/ui/typography";
import { ScrollArea } from "@/components/ui/scroll-area";
import PodcastCard from "@/components/podcastComponents/PodcastCard";
import { PodcastItemType } from "@/@types/podcast";
import MonaLisaLoadingAnimation from "../ui/MonaLisaLoadingAnimation";

function PodcastCardContainer({
  title,
  data,
}: {
  title?: string;
  data: PodcastItemType[] | null;
}) {
  const { windowWidth } = useWindowSize();

  return (
    <ScrollArea className="w-full">
      {title && <TypographyH3 className="capitalize p-4">{title}</TypographyH3>}
      {!data && (
        <div className="flex justify-center">
          <MonaLisaLoadingAnimation />
        </div>
      )}
      {data && (
        <>
          <div
            className="p-4 grid gap-4 justify-normal grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
            style={
              windowWidth >= 1440
                ? {
                    gridTemplateColumns: `repeat(auto-fit, minmax(10rem, 12rem)`,
                  }
                : {}
            }>
            {data.map((sub) => (
              <PodcastCard key={sub._id} data={sub} />
            ))}
          </div>
          {data.length === 0 && (
            <TypographyLead className="p-6 text-center">
              No relatable podcast found.
            </TypographyLead>
          )}
        </>
      )}
    </ScrollArea>
  );
}

export default PodcastCardContainer;
