import { CirclePlay, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

function UserSettingSection() {
  return (
    <div className="px-4 pt-8 pb-4">
      <TypographyMuted className="text-base pb-2">Setting</TypographyMuted>
      <Button
        variant="link"
        className="hover:no-underline hover:bg-secondary/80 h-auto w-full justify-start my-1"
        asChild>
        <a href="/import-export">
          <Server size={18} />
          <div className="text-start px-4 py-1">
            <TypographySmall>Import & Export</TypographySmall>
            <TypographyMuted>
              Extract or add podcast subscriptions via OPML
            </TypographyMuted>
          </div>
        </a>
      </Button>
      <Button
        variant="link"
        className="hover:no-underline hover:bg-secondary/80 h-auto w-full justify-start my-1"
        asChild>
        <a href="/player-setting">
          <CirclePlay size={18} />
          <div className="text-start px-4 py-1">
            <TypographySmall>Player</TypographySmall>
          </div>
        </a>
      </Button>
    </div>
  );
}

export default UserSettingSection;
