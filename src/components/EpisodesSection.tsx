import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import EpisodeItem from "@/components/micro/EpisodeItem";
import { EpisodeType } from "@/@types/podcast";

function EpisodesSection({
  episodes,
  imgUrl,
}: {
  episodes?: EpisodeType[];
  imgUrl?: string;
}) {
  if (!episodes) return null;

  return (
    <section className="p-4 flex-1">
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={episodes.length}
            itemSize={112}
            width={width}>
            {({ index, style }) => (
              <EpisodeItem
                key={episodes[index].guid}
                imgUrl={imgUrl}
                episode={episodes[index]}
                style={style}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </section>
  );
}

export default EpisodesSection;
