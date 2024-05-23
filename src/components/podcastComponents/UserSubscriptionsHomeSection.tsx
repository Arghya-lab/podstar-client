import { TypographyH3 } from "@/components/ui/typography";
import { LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useWindowSize from "@/hooks/useWindowSize";
import useSubscriptions from "@/hooks/useSubscriptions";
import PodcastAvatar from "@/components/micro/PodcastAvatar";

function UserSubscriptionsHomeSection() {
  const { subscriptions } = useSubscriptions();
  const { windowWidth } = useWindowSize();

  if (subscriptions?.length === 0 || !subscriptions) return null;

  return (
    <main className="pb-8">
      <div className="flex justify-between pb-4">
        <TypographyH3>Subscriptions</TypographyH3>
        <Button variant="outline" size="icon" asChild>
          <Link to="/subscriptions">
            <LayoutGrid size={28} />
          </Link>
        </Button>
      </div>
      <div
        className="grid gap-2 xs:gap-3 grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 justify-normal"
        style={
          windowWidth >= 1600
            ? {
                gridTemplateColumns: `repeat(auto-fit, minmax(7rem, 8.5rem)`,
              }
            : {}
        }>
        {subscriptions.slice(0, 20).map((item) => (
          <PodcastAvatar key={item._id} data={item} />
        ))}
      </div>
    </main>
  );
}

export default UserSubscriptionsHomeSection;
