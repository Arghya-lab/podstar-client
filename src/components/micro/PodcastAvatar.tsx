import { Link } from "react-router-dom";
import { AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PodcastItemType } from "@/@types/podcast";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

function PodcastAvatar({
  data,
  isRounded = true,
}: {
  data: PodcastItemType;
  isRounded?: boolean;
}) {
  return (
    <Link to={`/podcast/${data._id}`} className="min-w-20  max-w-48">
      <AspectRatio
        ratio={1 / 1}
        className={cn("bg-muted", isRounded ? "rounded-lg" : "rounded-none")}>
        <Avatar
          className={cn(
            "h-full w-full",
            isRounded ? "rounded-lg" : "rounded-none"
          )}>
          <AvatarImage src={data.imgUrl} alt={data.name} />
          <AvatarFallback className={isRounded ? "rounded-lg" : "rounded-none"}>
            <AudioLines size={36} />
          </AvatarFallback>
        </Avatar>
      </AspectRatio>
    </Link>
  );
}

export default PodcastAvatar;
