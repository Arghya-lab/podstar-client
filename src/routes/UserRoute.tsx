import LoginBtnCard from "@/components/LoginBtnCard";
import UserCard from "@/components/UserCard";
import UserPodcastSection from "@/components/UserPodcastSection";
import UserSettingSection from "@/components/UserSettingSection";
import VerifyEmailCard from "@/components/VerifyEmailCard";
import { useGlobalStates } from "@/providers/globalStates-provider";

function UserRoute() {
  const { user } = useGlobalStates();

  if (!user) return <LoginBtnCard />;

  return (
    <div className="w-full p-4">
      {user.isVerified === false && <VerifyEmailCard />}
      <UserCard />
      <UserSettingSection />
      <UserPodcastSection />
    </div>
  );
}

export default UserRoute;
