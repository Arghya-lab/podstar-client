import { useEffect } from "react";
import { Outlet, useNavigation, Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
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
import Loader from "@/components/nano/Loader";
import BottomPlayerBar from "@/components/BottomPlayerBar";
import AudioPlayer from "@/components/AudioPlayer";
import FullScreenPlayer from "@/components/FullScreenPlayer";
import { usePlayerState } from "@/providers/playerState-provider";
import Logo from "@/components/ui/logo";
import useSetUser from "@/hooks/useSetUser";

function Root() {
  const navigation = useNavigation();
  const { windowWidth } = useWindowSize();
  const { playingCanceled } = usePlayerState();
  const setUser = useSetUser();

  useEffect(() => {
    (async () => {
      await setUser();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative mx-auto">
      <section className="flex border-b items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="px-8">
            <Logo />
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
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </div>
      <AudioPlayer />
      {!playingCanceled && (
        <>
          <BottomPlayerBar />
          <FullScreenPlayer />
        </>
      )}
    </div>
  );
}

export default Root;
