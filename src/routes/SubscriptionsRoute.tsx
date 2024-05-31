import useSubscriptions from "@/hooks/useSubscriptions";
import PodcastCardContainer from "@/components/podcastComponents/PodcastCardContainer";

function SubscriptionsRoute() {
  const { subscriptions } = useSubscriptions();

  return <PodcastCardContainer data={subscriptions} title="Subscriptions" />;
}

export default SubscriptionsRoute;
