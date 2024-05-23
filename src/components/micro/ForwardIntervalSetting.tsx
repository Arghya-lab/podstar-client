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
import useSettings from "@/hooks/useSettings";

function ForwardIntervalSetting() {
  const { settings, updateForwardInterval } = useSettings();
  const [value, setValue] = useState(settings.forwardIntervalSec);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="pl-4 py-2 max-w-2xl flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <FastForward size={20} />
        <TypographySpan>Forward interval</TypographySpan>
      </div>
      <Drawer
        open={isDrawerOpen}
        onOpenChange={(state) => setIsDrawerOpen(state)}>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="gap-1">
            {settings.forwardIntervalSec}s
            <ChevronRight size={16} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader>
              <DrawerTitle className="text-center">
                Forward interval
              </DrawerTitle>
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
              <Button
                onClick={async () => {
                  await updateForwardInterval(value);
                  setIsDrawerOpen(false);
                }}>
                Submit
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default ForwardIntervalSetting;
