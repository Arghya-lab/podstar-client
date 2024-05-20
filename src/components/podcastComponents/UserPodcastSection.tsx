import { GalleryVerticalEnd, Heart, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

function UserPodcastSection() {
  return (
    <div className="p-4">
      <TypographyMuted className="text-base pb-2">Podcasts</TypographyMuted>
      <Button
        variant="link"
        className="hover:no-underline hover:bg-secondary/80 h-auto w-full justify-start my-1"
        asChild>
        <a href="/subscriptions">
          <GalleryVerticalEnd size={18} />
          <div className="text-start px-4 py-1">
            <TypographySmall>Subscriptions</TypographySmall>
          </div>
        </a>
      </Button>
      <Button
        variant="link"
        className="hover:no-underline hover:bg-secondary/80 h-auto w-full justify-start my-1"
        asChild>
        <a href="/favorites">
          <Heart size={18} />
          <div className="text-start px-4 py-1">
            <TypographySmall>Favorites</TypographySmall>
          </div>
        </a>
      </Button>
      <Button
        variant="link"
        className="hover:no-underline hover:bg-secondary/80 h-auto w-full justify-start my-1"
        asChild>
        <a href="/history">
          <History size={18} />
          <div className="text-start px-4 py-1">
            <TypographySmall>History</TypographySmall>
          </div>
        </a>
      </Button>
    </div>
  );
}

export default UserPodcastSection;
