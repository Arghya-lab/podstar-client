import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePlayerState } from "@/providers/playerState-provider";
import { Button } from "@/components/ui/button";

function PlayerTimeStamp() {
  const { timeStamps, handleSkipTo } = usePlayerState();

  if (timeStamps.length === 0) return null;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl font-bold">
          TimeStamps
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-start gap-0.5">
          {timeStamps.map((timeStamp, id) => (
            <Button
              key={id}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => handleSkipTo(timeStamp.value, "seconds")}>
              {timeStamp.readableTimestamp} {timeStamp.description}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default PlayerTimeStamp;
