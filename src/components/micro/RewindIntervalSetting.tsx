import { useState } from "react";
import { ChevronRight, FastForward } from "lucide-react";
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

function RewindIntervalSetting() {
  const [value, setValue] = useState(10);

  return (
    <div className="pl-4 py-2 max-w-2xl flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <FastForward size={20} />
        <TypographySpan>Rewind interval</TypographySpan>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="gap-1">
            {value}s
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
              <Button>Submit</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default RewindIntervalSetting;
