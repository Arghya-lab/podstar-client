import { format } from "date-fns";
import { AudioLines } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TypographyH4,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ItunesType, PodcastType } from "@/@types/podcast";

function PodcastInfoSection({
  podcast,
  itunes,
}: {
  podcast?: PodcastType;
  itunes?: ItunesType;
}) {
  if (!podcast && !itunes) return null;

  return (
    <>
      <div className="max-h-64 max-w-64 mx-auto">
        <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
          <Avatar className="h-full w-full rounded-lg">
            <AvatarImage
              src={podcast?.image?.url}
              alt={podcast?.image?.title}
            />
            <AvatarFallback>
              <AudioLines className="h-44 w-44" />
            </AvatarFallback>
          </Avatar>
        </AspectRatio>
      </div>
      <section className="w-full lg:w-auto max-w-lg mx-auto">
        <TypographyH4 className="text-lg pt-4 text-pretty">
          {podcast?.title || itunes?.trackName}
        </TypographyH4>
        <TypographyLead className="text-base">
          {podcast?.itunesOwner?.name}
        </TypographyLead>
        <Button className="mt-4 mb-6 w-full max-w-64">Subscribe</Button>
        {(itunes?.genres && itunes?.genres?.length > 0) ||
        podcast?.itunesCategory ? (
          <TypographyMuted className="pb-2">
            Category : {itunes?.genres?.join(", ") || podcast!.itunesCategory}
          </TypographyMuted>
        ) : null}
        <TypographyMuted className="font-medium pb-8">
          {podcast?.description || podcast?.itunesSummary}
        </TypographyMuted>

        {itunes?.releaseDate && (
          <TypographyMuted className="pb-2">
            Release Date : {format(new Date(itunes.releaseDate), "do MMM yyyy")}
          </TypographyMuted>
        )}
        {podcast?.link || (podcast?.image && podcast?.image?.link) ? (
          <TypographyMuted className="underline pb-2">
            <a href={podcast.link || podcast.image!.link} target="_blank">
              website
            </a>
          </TypographyMuted>
        ) : null}
        {podcast?.itunesOwner?.email && (
          <TypographyMuted className="pb-2">
            Email : {podcast.itunesOwner.email}
          </TypographyMuted>
        )}
        {podcast?.copyright && (
          <TypographyMuted className="pb-2">
            Copyright : {podcast.copyright}
          </TypographyMuted>
        )}
      </section>
    </>
  );
}

export default PodcastInfoSection;
