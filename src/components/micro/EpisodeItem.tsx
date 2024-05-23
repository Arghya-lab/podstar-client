import { CSSProperties } from "react";
import { AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH4, TypographyMuted } from "@/components/ui/typography";
import formatDate from "@/utils/formateDate";
import { Separator } from "@/components/ui/separator";
import { EpisodeType } from "@/@types/podcast";
import { usePlayerState } from "@/providers/playerState-provider";
import formatEpisodeDuration from "@/utils/formatEpisodeDuration";

function EpisodeItem({
  episode,
  imgUrl,
  podcastId,
  style,
}: {
  episode: EpisodeType;
  imgUrl?: string;
  podcastId: string;
  style?: CSSProperties;
}) {
  const { episode: playingEp, playing, dispatch } = usePlayerState();

  return (
    <div
      style={style}
      className="pr-4"
      onClick={() => {
        dispatch({
          type: "setNewEpisode",
          payload: { episode, epImgUrl: imgUrl, podcastId },
        });
      }}>
      <div className="p-2 flex hover:bg-muted rounded-lg cursor-pointer">
        <Avatar className="h-16 w-16 xs:h-20 xs:w-20">
          {playing && episode.guid && episode.guid === playingEp?.guid && (
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50">
              <div className="w-1/2 flex justify-between items-center">
                <li className="h-5 w-1.5 rounded list-none bg-foreground animate-bounce delay-300 duration-800"></li>
                <li className="h-4 w-1.5 rounded list-none bg-foreground animate-bounce duration-1000"></li>
                <li className="h-6 w-1.5 rounded list-none bg-foreground animate-bounce delay-500 duration-1000"></li>
                <li className="h-3 w-1.5 rounded list-none bg-foreground animate-bounce delay-200 duration-750"></li>
              </div>
            </div>
          )}
          <AvatarImage src={imgUrl} alt={episode.title} />
          <AvatarFallback>
            <AudioLines size={24} />
          </AvatarFallback>
        </Avatar>
        <div className="pl-4 flex flex-col justify-between">
          <TypographyH4 className="text-base font-semibold text-pretty line-clamp-2">
            {episode.title}
          </TypographyH4>
          {/* <TypographyMuted className="line-clamp-2 opacity-65 text-pretty">
            {episode.description}
          </TypographyMuted> */}
          <TypographyMuted className="text-muted-foreground">
            {formatDate(episode.pubDate)}
            &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
            {formatEpisodeDuration(episode.itunesDuration)}
          </TypographyMuted>
        </div>
      </div>
      <Separator className="w-[calc(100%-1rem)] mx-2" />
    </div>
  );
}

export default EpisodeItem;
