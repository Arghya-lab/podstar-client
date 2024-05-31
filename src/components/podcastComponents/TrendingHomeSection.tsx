import { TypographyH3 } from "@/components/ui/typography";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useTrending from "@/hooks/useTrending";
import useWindowSize from "@/hooks/useWindowSize";
import PodcastAvatar from "@/components/micro/PodcastAvatar";
import { Skeleton } from "@/components/ui/skeleton";

function TrendingHomeSection() {
  const { trending } = useTrending();
  const { windowWidth } = useWindowSize();

  return (
    <main className="pb-8">
      <div className="flex justify-between pb-4">
        <TypographyH3>Trending</TypographyH3>
        <Button variant="outline" size="icon" asChild>
          <Link to="/trending">
            <LayoutDashboard size={28} strokeWidth={1.56} />
          </Link>
        </Button>
      </div>
      {!trending ? (
        <Skeleton className="rounded-lg h-96 w-full" />
      ) : (
        <div
          className="grid gap-2 xs:gap-3 grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9  2xl:grid-cols-10 justify-normal"
          style={
            windowWidth >= 1600
              ? {
                  gridTemplateColumns: `repeat(auto-fit, minmax(7rem, 8.5rem)`,
                }
              : {}
          }>
          {trending.slice(0, 20).map((item) => (
            <PodcastAvatar key={item._id} data={item} />
          ))}
        </div>
      )}
    </main>
  );
}

export default TrendingHomeSection;
