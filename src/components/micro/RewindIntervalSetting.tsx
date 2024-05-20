import { useState } from "react";
import { ChevronRight, Rewind } from "lucide-react";
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

function RewindIntervalSetting() {
  const { settings, updateRewindInterval } = useSettings();
  const [value, setValue] = useState(settings.rewindIntervalSec);

  return (
    <div className="pl-4 py-2 max-w-2xl flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Rewind size={20} />
        <TypographySpan>Rewind interval</TypographySpan>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="gap-1">
            {settings.rewindIntervalSec}s
            <ChevronRight size={16} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader>
              <DrawerTitle className="text-center">Rewind interval</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 py-8">
              <TypographyH3 className="text-center pb-12">
                {value}s
              </TypographyH3>
              <SliderScale
                minValue={5}
                maxValue={90}
                totalLargePointer={18}
                perLargeScaleSmallPointerCount={1}
                scaleValueToFixed={0}
                scaleNumberMaxLength={2}
                value={value}
                setValue={setValue}
              />
            </div>
            <DrawerFooter>
              <Button onClick={() => updateRewindInterval(value)}>
                Submit
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default RewindIntervalSetting;
