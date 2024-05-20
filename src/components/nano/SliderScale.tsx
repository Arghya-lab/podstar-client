import { Dispatch, SetStateAction } from "react";
import { Slider } from "@/components/ui/slider";
import { TypographySmall } from "@/components/ui/typography";

function SliderScale({
  minValue,
  maxValue,
  value,
  setValue,
  totalLargePointer,
  perLargeScaleSmallPointerCount,
  scaleValueToFixed = 1,
  scaleNumberMaxLength = 0,
  hideScaleNumbers = false,
}: {
  minValue: number;
  maxValue: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  totalLargePointer: number;
  perLargeScaleSmallPointerCount: number;
  scaleValueToFixed?: number;
  scaleNumberMaxLength?: number;
  hideScaleNumbers?: boolean;
}) {
  return (
    <>
      <Slider
        size="large"
        min={minValue}
        max={maxValue}
        step={
          (maxValue - minValue) /
          ((totalLargePointer - 1) * perLargeScaleSmallPointerCount)
        }
        onValueChange={(val: number[]) => {
          setValue(val[0]);
        }}
        value={[value]}
      />
      <div className="relative mx-2 mt-2 mb-4">
        <div className="flex justify-between absolute top-0 left-0 right-0 z-40">
          {Array(totalLargePointer)
            .fill(0)
            .map((_, id) => (
              <div key={id} className="h-3 w-[1px] bg-foreground" />
            ))}
        </div>
        <div className="flex justify-between absolute top-0 left-0 right-0">
          {Array((totalLargePointer - 1) * perLargeScaleSmallPointerCount + 1)
            .fill(0)
            .map((_, id) => (
              <div key={id} className="h-1.5 w-[1px] bg-muted-foreground" />
            ))}
        </div>
      </div>
      {!hideScaleNumbers && (
        <div className="flex justify-between pt-2.5">
          {Array.from(Array(totalLargePointer), (_, idx) =>
            (((maxValue - minValue) / (totalLargePointer - 1)) * idx + minValue)
              .toFixed(scaleValueToFixed)
              .toString()
              .padStart(scaleNumberMaxLength, "0")
          ).map((val, id) => (
            <TypographySmall key={id}>{val}</TypographySmall>
          ))}
        </div>
      )}
    </>
  );
}

export default SliderScale;
