import LoginBtnCard from "@/components/LoginBtnCard";
import UserCard from "@/components/UserCard";
import UserPodcastSection from "@/components/UserPodcastSection";
import UserSettingSection from "@/components/UserSettingSection";
import VerifyEmailCard from "@/components/VerifyEmailCard";
import { TypographyH3 } from "@/components/ui/typography";
import { useGlobalStates } from "@/providers/globalStates-provider";

function UserRoute() {
  const { user } = useGlobalStates();

  if (!user) return <LoginBtnCard />;

  return (
    <div className="w-full p-4">
      <TypographyH3>Settings</TypographyH3>
      {user.isVerified === false && <VerifyEmailCard />}
      <UserCard />
      <UserSettingSection />
      <UserPodcastSection />
    </div>
  );
}

export default UserRoute;
