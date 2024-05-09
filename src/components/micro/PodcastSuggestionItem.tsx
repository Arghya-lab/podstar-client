import { useNavigate } from "react-router-dom";
import { AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { PodcastSuggestionType } from "@/@types/podcast";

function PodcastSuggestionItem({ data }: { data: PodcastSuggestionType }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/podcast/${data._id}`);
  };

  return (
    <div
      role="button"
      className="px-2 py-2 mr-4 flex hover:bg-accent rounded-md"
      onClick={handleClick}>
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
    </div>
  );
}

export default PodcastSuggestionItem;
