import UserInfo from "@/components/micro/UserInfo";
import { Button } from "@/components/ui/button";
import config from "@/config";

function AccountRoute() {
  return (
    <div className="p-4 w-full flex justify-center">
      <div className="w-full max-w-md py-8">
        <UserInfo />
        <Button variant="outline" className="w-full mt-16" asChild>
          <a href="/change-password">Change password</a>
        </Button>
        <Button variant="outline" className="w-full mt-8" asChild>
          <a href={`${config.apiBaseUrl}/auth/logout`}>Logout</a>
        </Button>
        <Button variant="destructive" className="w-full mt-8">
          Delete Account
        </Button>
      </div>
    </div>
  );
}

export default AccountRoute;
