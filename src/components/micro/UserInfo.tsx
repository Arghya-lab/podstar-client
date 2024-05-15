import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { useGlobalStates } from "@/providers/globalStates-provider";
import { UserRound } from "lucide-react";

function UserInfo() {
  const { user } = useGlobalStates();

  if (!user) return null;

  return (
    <div className="flex">
      <Avatar className="h-12 w-12">
        <AvatarImage src={user?.image || ""} alt={user.userName} />
        <AvatarFallback>
          <UserRound />
        </AvatarFallback>
      </Avatar>
      <div className="pl-4">
        <TypographyP>{user.userName}</TypographyP>
        <TypographyMuted>{user.email}</TypographyMuted>
      </div>
    </div>
  );
}

export default UserInfo;
