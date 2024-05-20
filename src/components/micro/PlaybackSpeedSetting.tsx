import { useState } from "react";
import { ChevronRight, CircleGauge } from "lucide-react";
import SliderScale from "@/components/nano/SliderScale";
import { TypographyH3, TypographySpan } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useSettings from "@/hooks/useSettings";

function PlaybackSpeedSetting() {
  const { settings, updatePlaybackSpeed } = useSettings();
  const [value, setValue] = useState(settings.playbackSpeed);

  return (
    <div className="pl-4 py-2 max-w-2xl flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <CircleGauge />
        <TypographySpan>Playback speed</TypographySpan>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="gap-1">
            {settings.playbackSpeed.toFixed(1)}x
            <ChevronRight size={16} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader>
              <DrawerTitle className="text-center">Playback speed</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 py-8">
              <TypographyH3 className="text-center pb-12">
                {value.toFixed(1)}x
              </TypographyH3>
              <SliderScale
                minValue={0.5}
                maxValue={4.0}
                totalLargePointer={8}
                perLargeScaleSmallPointerCount={5}
                value={value}
                setValue={setValue}
              />
            </div>
            <DrawerFooter>
              <Button onClick={() => updatePlaybackSpeed(value)}>Submit</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default PlaybackSpeedSetting;
