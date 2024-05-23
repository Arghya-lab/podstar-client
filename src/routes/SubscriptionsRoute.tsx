import useSubscriptions from "@/hooks/useSubscriptions";
import PodcastCardContainer from "@/components/podcastComponents/PodcastCardContainer";
import { TypographyLead } from "@/components/ui/typography";

function SubscriptionsRoute() {
  const { subscriptions } = useSubscriptions();

  if (!subscriptions) return <TypographyLead>Loading</TypographyLead>;

  return <PodcastCardContainer data={subscriptions} title="Subscriptions" />;
}

export default SubscriptionsRoute;
