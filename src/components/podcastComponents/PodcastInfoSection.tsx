import { format } from "date-fns";
import htmlParser from "html-react-parser";
import { AudioLines } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TypographyH4,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ItunesType, PodcastType } from "@/@types/podcast";
import useSubscription from "@/hooks/useSubscriptions";

function PodcastInfoSection({
  id,
  podcast,
  itunes,
}: {
  id: string;
  podcast: PodcastType;
  itunes?: ItunesType;
}) {
  const { subscriptions, handleSubscribe } = useSubscription();

  if (!podcast && !itunes) return null;

  return (
    <>
      <div className="max-h-64 max-w-64 mx-auto p-4 pt-8">
        <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
          <Avatar className="h-full w-full rounded-lg">
            <AvatarImage src={podcast.image?.url} alt={podcast.image?.title} />
            <AvatarFallback>
              <AudioLines className="h-44 w-44" />
            </AvatarFallback>
          </Avatar>
        </AspectRatio>
      </div>
      <section className="w-full p-4 pt-16 lg:w-auto max-w-lg mx-auto">
        <TypographyH4 className="text-2xl text-pretty">
          {podcast.title || itunes?.trackName}
        </TypographyH4>
        <TypographyLead className="text-base text-pretty">
          {podcast.itunesOwner?.name}
        </TypographyLead>
        <Button
          className="mt-4 mb-16"
          variant={
            subscriptions && subscriptions.map((data) => data._id).includes(id)
              ? "secondary"
              : "default"
          }
          onClick={() => handleSubscribe(id)}>
          {subscriptions && subscriptions.map((data) => data._id).includes(id)
            ? "Unsubscribe"
            : "Subscribe"}
        </Button>
        {(itunes?.genres && itunes?.genres?.length > 0) ||
        podcast.itunesCategory ? (
          <TypographyP className="pb-3 text-base">
            Category : {itunes?.genres?.join(", ") || podcast!.itunesCategory}
          </TypographyP>
        ) : null}
        <article className="font-medium pb-8">
          {htmlParser(podcast.description)}
        </article>

        {itunes?.releaseDate && (
          <TypographyMuted className="pb-2">
            Release Date : {format(new Date(itunes.releaseDate), "do MMM yyyy")}
          </TypographyMuted>
        )}
        {podcast.link || (podcast.image && podcast.image?.link) ? (
          <TypographyMuted className="underline pb-2">
            <a href={podcast.link || podcast.image!.link} target="_blank">
              website
            </a>
          </TypographyMuted>
        ) : null}
        {podcast.itunesOwner?.email && (
          <TypographyMuted className="pb-2">
            Email : {podcast.itunesOwner.email}
          </TypographyMuted>
        )}
        {podcast.copyright && (
          <TypographyMuted className="pb-2">
            Copyright : {podcast.copyright}
          </TypographyMuted>
        )}
      </section>
    </>
  );
}

export default PodcastInfoSection;
