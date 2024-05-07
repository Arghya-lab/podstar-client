import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainHomeSection from "@/components/MainHomeSection";

function HomeRoute() {
  return (
    <main className="flex-1 p-4">
      <div className="flex gap-4 items-center pb-8">
        <Link
          to="/search"
          className="flex-1 flex items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm cursor-pointer">
          <Search size={20} className="text-muted-foreground" />
        </Link>
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
      <MainHomeSection />
    </main>
  );
}

export default HomeRoute;
