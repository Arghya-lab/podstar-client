import { Link } from "react-router-dom";
import { AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PodcastSuggestionType } from "@/@types/podcast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function PodcastAvatar({ data }: { data: PodcastSuggestionType }) {
  return (
    <Link to={`/podcast/${data._id}`} className="min-w-20 max-w-28">
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
        <Avatar className="h-full w-full rounded-lg">
          <AvatarImage src={data.imgUrl} alt={data.name} className="" />
          <AvatarFallback className="rounded-lg">
            <AudioLines />
          </AvatarFallback>
        </Avatar>
      </AspectRatio>
    </Link>
  );
}

export default PodcastAvatar;
