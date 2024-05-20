import { Button } from "@/components/ui/button";
import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";

function ImportExportRoute() {
  return (
    <main className="w-fill p-4 flex-1">
      <TypographyH3>Import & Export</TypographyH3>
      <div className="p-4 w-full">
        <Button
          variant="ghost"
          className="flex-col h-auto items-start w-full my-1">
          <TypographyP>OPML Export</TypographyP>
          <TypographyMuted>
            Transfer your subscriptions to another podcast app
          </TypographyMuted>
        </Button>
        <Button
          variant="ghost"
          className="flex-col h-auto items-start w-full my-1">
          <TypographyP>OPML Import</TypographyP>
          <TypographyMuted>
            Import your subscriptions from another podcast app
          </TypographyMuted>
        </Button>
      </div>
    </main>
  );
}

export default ImportExportRoute;
