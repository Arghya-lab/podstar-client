import { Link } from "react-router-dom";
import { CirclePlay, Server, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeEnum } from "@/@types/theme";
import { useTheme } from "@/providers/theme-provider";

function UserSettingSection() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="px-4 pt-8 pb-4">
      <TypographyMuted className="text-base pb-2">Setting</TypographyMuted>
      <div className="flex items-center justify-between w-full max-w-xl px-4 py-2">
        <div className="flex items-center">
          <Sun size={18} />
          <TypographySmall className="px-4 py-1">Theme</TypographySmall>
        </div>
        <Select
          value={theme}
          onValueChange={(value: ThemeEnum) => {
            setTheme(value);
          }}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ThemeEnum.LIGHT}>Light</SelectItem>
            <SelectItem value={ThemeEnum.DARK}>Dark</SelectItem>
            <SelectItem value={ThemeEnum.SYSTEM}>System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="link"
        className="hover:no-underline hover:bg-secondary/80 h-auto w-full justify-start my-1"
        asChild>
        <Link to="/player-setting">
          <CirclePlay size={18} />
          <div className="text-start px-4 py-1">
            <TypographySmall>Player</TypographySmall>
          </div>
        </Link>
      </Button>
      <Button
        variant="link"
        className="hover:no-underline hover:bg-secondary/80 h-auto w-full justify-start my-1"
        asChild>
        <Link to="/import-export">
          <Server size={18} />
          <div className="text-start px-4 py-1">
            <TypographySmall>Import & Export</TypographySmall>
          </div>
        </Link>
      </Button>
    </div>
  );
}

export default UserSettingSection;
