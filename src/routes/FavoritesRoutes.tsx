import FavoritesEpisodeItem from "@/components/podcastComponents/FavoritesEpisodeItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyH3 } from "@/components/ui/typography";
import useFavorite from "@/hooks/useFavorite";
import useWindowSize from "@/hooks/useWindowSize";

function FavoritesRoutes() {
  const { windowWidth } = useWindowSize();
  const { favorites } = useFavorite();

  return (
    <ScrollArea className="w-full">
      <TypographyH3 className="capitalize p-4">favorites</TypographyH3>
      <div
        className="p-4 grid gap-4 justify-normal grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        style={
          windowWidth >= 1440
            ? {
                gridTemplateColumns: `repeat(auto-fit, minmax(10rem, 12rem)`,
              }
            : {}
        }>
        {favorites
          ? favorites.map((fav) => (
              <FavoritesEpisodeItem key={fav._id} data={fav} />
            ))
          : null}
      </div>
    </ScrollArea>
  );
}

export default FavoritesRoutes;
