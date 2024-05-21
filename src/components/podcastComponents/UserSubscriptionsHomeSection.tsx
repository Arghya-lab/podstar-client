import { TypographyH3 } from "@/components/ui/typography";
import { LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useWindowSize from "@/hooks/useWindowSize";
import useSubscription from "@/hooks/useSubscriptions";
import PodcastAvatar from "@/components/micro/PodcastAvatar";

function UserSubscriptionsHomeSection() {
  const { subscriptions } = useSubscription();
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
        className="grid gap-2 xs:gap-3 justify-normal"
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
        {subscriptions.slice(0, 20).map((item) => (
          <PodcastAvatar key={item._id} data={item} />
        ))}
      </div>
    </main>
  );
}

export default UserSubscriptionsHomeSection;
