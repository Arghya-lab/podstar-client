import { Outlet, useNavigation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { TypographyH1 } from "@/components/ui/typography";
import useWindowSize from "@/hooks/useWindowSize";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

function Root() {
  const navigation = useNavigation();
  const { windowWidth } = useWindowSize();

  return (
    <>
      <section className="flex border-b items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="px-8">
            <img className="w-10 h-10" src="/masked-icon.svg" />
          </Link>
          <TypographyH1 className="font-nunito">Podstar</TypographyH1>
        </div>
        {windowWidth < 1280 && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="mr-8">
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader />
              <Navbar className="h-full" />
            </SheetContent>
          </Sheet>
        )}
      </section>
      <div className="flex h-[calc(100dvh-4rem)] w-full">
        {windowWidth >= 1280 && <Navbar className="border-r-2 max-w-64" />}
        {navigation.state === "loading" ? "loading" : <Outlet />}
      </div>
    </>
  );
}

export default Root;
