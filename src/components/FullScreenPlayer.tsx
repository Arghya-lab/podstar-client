import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { usePlayerState } from "@/providers/playerState-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AudioLines } from "lucide-react";
import htmlParser from "html-react-parser";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { Slider } from "@/components/ui/slider";
import EpLikeBtn from "@/components/nano/EpLikeBtn";
import EpDownloadBtn from "@/components/nano/EpDownloadBtn";
import EpPlayBtn from "@/components/nano/EpPlayBtn";
import EpSkipBackBtn from "@/components/nano/EpSkipBackBtn";
import EpSkipForwardBtn from "@/components/nano/EpSkipForwardBtn";
import AudioVolumeController from "@/components/nano/VolumeController";
import PlayerMinimizeBtn from "@/components/nano/PlayerMinimizeBtn";
import PlayerTimeStamp from "@/components/micro/PlayerTimeStamp";
import CancelPlayingBtn from "@/components/nano/CancelPlayingBtn";
import useWindowSize from "@/hooks/useWindowSize";
import PlayTime from "@/components/nano/PlayTime";
import PlayDuration from "./nano/PlayDuration";

function FullScreenPlayer() {
  const {
    episode,
    epImgUrl,
    played,
    audioPlayerRef,
    playerFullScreen,
    dispatch,
  } = usePlayerState();

  const { windowWidth } = useWindowSize();

  return (
    <Drawer
      open={playerFullScreen}
      onOpenChange={(payload) =>
        dispatch({ type: "updateFullScreen", payload })
      }>
      <DrawerContent>
        <ScrollArea className="w-full h-[calc(100dvh-2.5rem)] px-10 md:px-16">
          <div className="h-[calc(100dvh-2.5rem)] w-full py-20 flex flex-col justify-between md:justify-end">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-8 xl:gap-12">
              <Avatar className="h-64 w-64 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-64 max-w-full aspect-square rounded-lg">
                <AvatarImage src={epImgUrl} alt={episode?.title} />
                <AvatarFallback className="rounded-lg">
                  <AudioLines size={48} />
                </AvatarFallback>
              </Avatar>
              <div className="w-full">
                <TypographyP className="text-lg xs:text-xl lg:text-3xl xl:text-4xl font-semibold line-clamp-2">
                  {episode?.title || episode?.itunesTitle}
                </TypographyP>
                <TypographyMuted className="text-md lg:text-xl xl:text-2xl line-clamp-1">
                  {episode?.author || episode?.itunesAuthor}
                </TypographyMuted>
              </div>
            </div>
            <div className="w-full pt-16">
              <div className="flex items-center gap-2">
                {windowWidth >= 768 && (
                  <PlayTime size={windowWidth >= 1024 ? "large" : "small"} />
                )}
                <Slider
                  size="large"
                  value={[played]}
                  onValueChange={(val) => {
                    if (audioPlayerRef?.current) {
                      audioPlayerRef.current.seekTo(val[0], "fraction");
                    }
                  }}
                  max={1}
                  step={0.01}
                />
                {windowWidth >= 768 && (
                  <PlayDuration
                    size={windowWidth >= 1024 ? "large" : "small"}
                  />
                )}
              </div>
              {windowWidth < 768 && (
                <div className="pt-4 pb-2 flex justify-between items-center">
                  <PlayTime />
                  <PlayDuration />
                </div>
              )}
              <div className="w-full pt-4 flex gap-2 lg:gap-4 items-center justify-between">
                <div className="gap-1 md:gap-2 lg:gap-4 flex items-center flex-1 justify-start">
                  <EpLikeBtn size={windowWidth >= 1024 ? "large" : "small"} />
                  <EpDownloadBtn
                    size={windowWidth >= 1024 ? "large" : "small"}
                  />
                </div>
                <div className="gap-1 md:gap-2 lg:gap-4 flex items-center flex-1 justify-center">
                  <EpSkipBackBtn
                    size={windowWidth >= 1024 ? "large" : "small"}
                  />
                  <EpPlayBtn size={windowWidth >= 1024 ? "large" : "medium"} />
                  <EpSkipForwardBtn
                    size={windowWidth >= 1024 ? "large" : "small"}
                  />
                </div>
                <div className="gap-1 md:gap-2 lg:gap-4 flex items-center flex-1 justify-end">
                  <AudioVolumeController
                    size={windowWidth >= 1024 ? "large" : "small"}
                  />
                  <PlayerMinimizeBtn
                    size={windowWidth >= 1024 ? "large" : "small"}
                  />
                  <CancelPlayingBtn
                    size={windowWidth >= 1024 ? "large" : "small"}
                  />
                </div>
              </div>
            </div>
          </div>
          <PlayerTimeStamp />
          {(!!episode?.contentEncoded ||
            !!episode?.description ||
            !!episode?.itunesSummary) && (
            <div className="w-full py-12">
              <TypographyP className="text-xl lg:text-2xl font-bold pb-4">
                Shownotes:
              </TypographyP>
              {episode?.contentEncoded ? (
                <article className="prose prose-xl prose-a:text-link hover:prose-a:text-link-hover prose-p:py-4">
                  {htmlParser(episode.contentEncoded)}
                </article>
              ) : (
                <p>{episode?.description || episode?.itunesSummary || ""}</p>
              )}
            </div>
          )}
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

export default FullScreenPlayer;
