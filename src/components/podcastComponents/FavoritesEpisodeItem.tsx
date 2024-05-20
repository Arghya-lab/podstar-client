import { FavoritePodcastType } from "@/@types/podcast";
import { useState } from "react";
import { TypographyMuted, TypographyP } from "../ui/typography";
import { AspectRatio } from "../ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { AudioLines } from "lucide-react";
import formatDate from "@/utils/formateDate";
import formatEpisodeDuration from "@/utils/formatEpisodeDuration";

function FavoritesEpisodeItem({ data }: { data: FavoritePodcastType }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="mb-8 flex flex-col gap-4"
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}>
      <div className="min-w-32 max-w-48">
        <AspectRatio
          ratio={1 / 1}
          className={cn("bg-muted", !isHover ? "rounded-lg" : "rounded-none")}>
          <Avatar
            className={cn(
              "h-full w-full",
              !isHover ? "rounded-lg" : "rounded-none"
            )}>
            <AvatarImage src={data.podcast.imgUrl} alt={data.podcast.name} />
            <AvatarFallback
              className={!isHover ? "rounded-lg" : "rounded-none"}>
              <AudioLines />
            </AvatarFallback>
          </Avatar>
        </AspectRatio>
      </div>
      <div className="flex flex-col justify-between">
        <TypographyP
          className={cn(
            "font-semibold text-md leading-snug text-pretty line-clamp-2",
            isHover ? "underline underline-offset-1" : ""
          )}>
          {data.title}
        </TypographyP>
        <div className="pt-2">
          <TypographyMuted className="text-sm">
            {data.podcast.name}
          </TypographyMuted>
          <TypographyMuted className="text-muted-foreground">
            {formatDate(data.pubDate)}
            &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
            {formatEpisodeDuration(data.duration)}
          </TypographyMuted>
        </div>
      </div>
    </div>
  );
}

export default FavoritesEpisodeItem;
