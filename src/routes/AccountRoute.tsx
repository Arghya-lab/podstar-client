import { Link } from "react-router-dom";
import UserInfo from "@/components/micro/UserInfo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyH3 } from "@/components/ui/typography";
import config from "@/config";

function AccountRoute() {
  return (
    <ScrollArea className="w-full">
      <main className="flex-1 flex flex-col justify-center p-4">
        <TypographyH3>Account</TypographyH3>
        <div className="p-4 w-full flex justify-center">
          <div className="w-full max-w-md py-8">
            <UserInfo />
            <Button variant="outline" className="w-full mt-16" asChild>
              <Link to="/change-password">Change password</Link>
            </Button>
            <Button variant="outline" className="w-full mt-8" asChild>
              <Link to={`${config.apiBaseUrl}/auth/logout`}>Logout</Link>
            </Button>
            <Button variant="destructive" className="w-full mt-8">
              Delete Account
            </Button>
          </div>
        </div>
      </main>
    </ScrollArea>
  );
}

export default AccountRoute;
