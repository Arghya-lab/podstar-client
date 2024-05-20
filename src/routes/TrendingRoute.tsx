import PodcastCardContainer from "@/components/podcastComponents/PodcastCardContainer";
import { TypographyLead } from "@/components/ui/typography";
import useTrending from "@/hooks/useTrending";

function TrendingRoute() {
  const { trending } = useTrending();

  if (!trending) return <TypographyLead>Loading</TypographyLead>;

  return <PodcastCardContainer data={trending} title="trending" />;
}

export default TrendingRoute;
