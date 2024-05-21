import ForwardIntervalSetting from "@/components/micro/ForwardIntervalSetting";
import PlaybackSpeedSetting from "@/components/micro/PlaybackSpeedSetting";
import RewindIntervalSetting from "@/components/micro/RewindIntervalSetting";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";

function PlayerSettingsRoute() {
  return (
    <ScrollArea className="w-full">
      <main className="flex-1 flex flex-col justify-center p-4">
        <TypographyH3 className="pb-8">Player settings</TypographyH3>
        <div className="p-4">
          <TypographyMuted className="text-base pb-2">
            Playback settings
          </TypographyMuted>
          <PlaybackSpeedSetting />
        </div>
        <div className="p-4">
          <TypographyMuted className="text-base pb-2">
            Skip intervals
          </TypographyMuted>
          <RewindIntervalSetting />
          <ForwardIntervalSetting />
        </div>
      </main>
    </ScrollArea>
  );
}

export default PlayerSettingsRoute;
