import UserSettingSection from "@/components/UserSettingSection";
import LoginBtnCard from "@/components/authComponents/LoginBtnCard";
import UserCard from "@/components/authComponents/UserCard";
import VerifyEmailCard from "@/components/authComponents/VerifyEmailCard";
import UserPodcastSection from "@/components/podcastComponents/UserPodcastSection";
import { TypographyH3 } from "@/components/ui/typography";
import { useGlobalStates } from "@/providers/globalStates-provider";

function UserRoute() {
  const { user } = useGlobalStates();

  return (
    <main className="w-full p-4">
      <TypographyH3 className="pb-4">You</TypographyH3>
      {user && user.isVerified === false && <VerifyEmailCard />}
      {user ? <UserCard /> : <LoginBtnCard />}
      <UserSettingSection />
      <UserPodcastSection />
    </main>
  );
}

export default UserRoute;
