import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useTrending from "@/hooks/useTrending";
import useWindowSize from "@/hooks/useWindowSize";
import PodcastAvatar from "@/components/micro/PodcastAvatar";

function TrendingHomeSection() {
  const { trending } = useTrending();
  const { windowWidth } = useWindowSize();

  return (
    <main className="pb-8">
      <div className="flex justify-between pb-4">
        <TypographyH3>Trending</TypographyH3>
        <Button variant="outline" size="icon" asChild>
          <Link to="/trending">
            <LayoutGrid size={28} />
          </Link>
        </Button>
      </div>
      {!trending ? (
        <TypographyH4>Loading.......</TypographyH4>
      ) : (
        <div
          className="grid gap-2 xs:gap-3 justify-around"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${
              windowWidth < 426
                ? "5rem, 5.5rem"
                : windowWidth < 640
                ? "5rem, 6rem"
                : windowWidth < 768
                ? "5.75rem, 6.75rem"
                : "6.5rem, 7rem"
            }))`,
          }}>
          {trending.slice(0, 20).map((item) => (
            <PodcastAvatar key={item._id} data={item} />
          ))}
        </div>
      )}
    </main>
  );
}

export default TrendingHomeSection;
