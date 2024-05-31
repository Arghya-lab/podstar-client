import { useEffect, useMemo, useState } from "react";
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
import { usePlayerState } from "@/providers/playerState-provider";
import Logo from "@/components/ui/appLogo-icon";
import { getUser } from "@/api/auth";
import { useGlobalStates } from "@/providers/globalStates-provider";
import AudioPlayer from "@/components/playerComponents/AudioPlayer";
import BottomPlayerBar from "@/components/playerComponents/BottomPlayerBar";
import FullScreenPlayer from "@/components/playerComponents/FullScreenPlayer";
import { cn } from "@/lib/utils";

function Root() {
  const navigation = useNavigation();
  const { windowWidth } = useWindowSize();
  const { playingCanceled } = usePlayerState();
  const { dispatch } = useGlobalStates();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getUser();
      if (res && res.user) {
        dispatch({
          type: "onUserLogin",
          payload: {
            user: res.user,
            settings: res.settings,
          },
        });
      } else {
        dispatch({
          type: "setOfflineSetting",
        });
      }
      dispatch({
        type: "setUserFetched",
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(
    () => (
      <div className="relative mx-auto overflow-clip h-dvh">
        <section className="flex border-b items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="px-8">
              <Logo size={40} />
            </Link>
            <TypographyH1 className="font-nunito">Podstar</TypographyH1>
          </div>
          {windowWidth < 1280 && (
            <Sheet open={isSideNavOpen} onOpenChange={setIsSideNavOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="link"
                  className="opacity-70 hover:opacity-100 mr-8">
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader />
                <Navbar
                  onAction={() => setIsSideNavOpen(false)}
                  className="h-full"
                />
              </SheetContent>
            </Sheet>
          )}
        </section>
        <div
          className={cn(
            "flex w-full h-[calc(100dvh-4rem)]",
            { "h-[calc(100dvh-4rem)]": playingCanceled },
            { "h-[calc(100dvh-4rem-5rem)]": !playingCanceled }
          )}>
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
    ),
    [isSideNavOpen, navigation.state, playingCanceled, windowWidth]
  );
}

export default Root;
