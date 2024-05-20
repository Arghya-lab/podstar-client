import { Link } from "react-router-dom";
import { AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { PodcastItemType } from "@/@types/podcast";

function PodcastSuggestionItem({ data }: { data: PodcastItemType }) {
  return (
    <Link
      to={`/podcast/${data._id}`}
      role="button"
      className="px-2 py-2 mr-4 flex hover:bg-accent rounded-md">
      <Avatar className="h-12 w-12">
        <AvatarImage src={data.imgUrl} alt={data.name} />
        <AvatarFallback>
          <AudioLines />
        </AvatarFallback>
      </Avatar>
      <div className="pl-4">
        <TypographyP>{data.name}</TypographyP>
        <TypographyMuted>{data.author}</TypographyMuted>
      </div>
    </Link>
  );
}

export default PodcastSuggestionItem;
