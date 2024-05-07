import { CSSProperties } from "react";
import { AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyLarge, TypographyMuted } from "./ui/typography";
import formatDate from "@/utils/formateDate";
import { Separator } from "./ui/separator";
import { EpisodeType } from "@/@types/podcast";

function EpisodeItem({
  episode,
  imgUrl,
  style,
}: {
  episode: EpisodeType;
  imgUrl?: string;
  style?: CSSProperties;
}) {
  return (
    <div style={style} className="pr-4">
      <div className="p-2 flex hover:bg-muted rounded-lg cursor-pointer">
        <Avatar className="h-16 w-16 xs:h-20 xs:w-20 rounded-lg">
          <AvatarImage src={imgUrl} alt={episode.title} />
          <AvatarFallback className="rounded-lg">
            <AudioLines size={24} />
          </AvatarFallback>
        </Avatar>
        <div className="pl-4">
          <TypographyLarge className="-mt-2 text-pretty line-clamp-1">
            {episode.title}
          </TypographyLarge>
          <TypographyMuted className="line-clamp-2 opacity-65 text-pretty">
            {episode.description}
          </TypographyMuted>
          <TypographyMuted className="text-muted-foreground">
            {formatDate(episode.pubDate)}
            &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
            {`${Math.floor(episode.itunesDuration / 3600)}hr ${Math.floor(
              (episode.itunesDuration % 3600) / 60
            )}min`}
          </TypographyMuted>
        </div>
      </div>
      <Separator className="w-[calc(100%-1rem)] mx-2 mb-4" />
    </div>
  );
}

export default EpisodeItem;
