import { useState } from "react";
import { Link } from "react-router-dom";
import PodcastAvatar from "@/components/micro/PodcastAvatar";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { PodcastItemType } from "@/@types/podcast";
import { cn } from "@/lib/utils";

function PodcastCard({ data }: { data: PodcastItemType }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="mb-4"
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}>
      <PodcastAvatar data={data} isRounded={!isHover} />
      <Link to={`/podcast/${data._id}`}>
        <TypographyP
          className={cn(
            "pt-2 font-semibold leading-snug text-pretty line-clamp-2",
            isHover ? "underline underline-offset-1" : ""
          )}>
          {data.name}
        </TypographyP>
        <TypographyMuted className="text-sm text-pretty line-clamp-2">
          {data.author}
        </TypographyMuted>
      </Link>
    </div>
  );
}

export default PodcastCard;
