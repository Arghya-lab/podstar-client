import useWindowSize from "@/hooks/useWindowSize";
import { TypographyH3 } from "@/components/ui/typography";
import { ScrollArea } from "@/components/ui/scroll-area";
import PodcastCard from "@/components/podcastComponents/PodcastCard";
import { PodcastItemType } from "@/@types/podcast";

function PodcastCardContainer({
  title,
  data,
}: {
  title?: string;
  data: PodcastItemType[];
}) {
  const { windowWidth } = useWindowSize();

  return (
    <ScrollArea className="p-4 w-full">
      {title && (
        <TypographyH3 className="capitalize pb-8">{title}</TypographyH3>
      )}
      <div
        className="grid gap-4 justify-normal grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
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
    </ScrollArea>
  );
}

export default PodcastCardContainer;
