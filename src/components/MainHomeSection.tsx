import { TypographyH1 } from "@/components/ui/typography";
import { LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function MainHomeSection() {
  return (
    <main>
      <div className="flex justify-between">
        <TypographyH1 className="font-bold">Podcasts</TypographyH1>
        <Button variant="outline" size="icon" asChild>
          <Link to="/podcasts">
            <LayoutGrid size={28} />
          </Link>
        </Button>
      </div>
    </main>
  );
}

export default MainHomeSection;
