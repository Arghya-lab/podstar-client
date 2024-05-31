import UserSettingSection from "@/components/UserSettingSection";
import LoginBtnCard from "@/components/authComponents/LoginBtnCard";
import UserCard from "@/components/authComponents/UserCard";
import VerifyEmailCard from "@/components/authComponents/VerifyEmailCard";
import UserPodcastSection from "@/components/UserPodcastSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGlobalStates } from "@/providers/globalStates-provider";

function UserRoute() {
  const { user } = useGlobalStates();

  return (
    <ScrollArea className="w-full">
      <main className="flex-1 flex flex-col justify-center p-4">
        {user && user.isVerified === false && <VerifyEmailCard />}
        {user ? <UserCard /> : <LoginBtnCard />}
        <UserSettingSection />
        <UserPodcastSection />
      </main>
    </ScrollArea>
  );
}

export default UserRoute;
