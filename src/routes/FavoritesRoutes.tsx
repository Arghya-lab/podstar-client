import EpisodeItem from "@/components/micro/EpisodeItem";
import MonaLisaLoadingAnimation from "@/components/ui/MonaLisaLoadingAnimation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyH3, TypographyLead } from "@/components/ui/typography";
import useFavorites from "@/hooks/useFavorites";

function FavoritesRoutes() {
  const { favorites } = useFavorites();

  return (
    <ScrollArea className="w-full flex-1">
      <TypographyH3 className="capitalize p-4">favorites</TypographyH3>
      {!favorites && (
        <div className="flex justify-center">
          <MonaLisaLoadingAnimation />
        </div>
      )}
      {favorites && (
        <>
          <section className="p-4 flex-1 flex flex-col">
            {favorites.map((fav) => (
              <EpisodeItem
                key={fav._id}
                episode={fav.episodeContent}
                podcastId={fav.podcast._id}
                imgUrl={fav.podcast.imgUrl}
              />
            ))}
          </section>
          {favorites.length === 0 && (
            <TypographyLead className="p-6 text-center">
              No relatable podcast found.
            </TypographyLead>
          )}
        </>
      )}
    </ScrollArea>
  );
}

export default FavoritesRoutes;
