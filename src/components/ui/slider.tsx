import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface sliderPropsType
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  size?: "small" | "medium" | "large";
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  sliderPropsType
>(({ className, size = "medium", ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center cursor-pointer",
      className
    )}
    {...props}>
    <SliderPrimitive.Track
      className={cn(
        "relative w-full grow overflow-hidden rounded-full bg-primary/20",
        size === "small" ? "h-0.5" : size === "large" ? "h-1.5" : "h-1"
      )}>
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        size == "large" ? "h-4 w-4" : "h-3 w-3"
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
