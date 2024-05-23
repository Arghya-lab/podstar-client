import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserInfo from "@/components/micro/UserInfo";

function UserCard() {
  return (
    <div className="px-2 py-2 flex justify-between items-center border border-background hover:border-border rounded-md">
      <UserInfo />
      <Button asChild variant="link" className="opacity-70 hover:opacity-100">
        <Link to="/account">
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}

export default UserCard;
