import { usePlayerState } from "@/providers/playerState-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { AudioLines } from "lucide-react";
import useWindowSize from "@/hooks/useWindowSize";
import EpLikeBtn from "@/components/nano/EpFavoriteBtn";
import EpPlayBtn from "@/components/nano/EpPlayBtn";
import EpSkipBackBtn from "@/components/nano/EpSkipBackBtn";
import EpSkipForwardBtn from "@/components/nano/EpSkipForwardBtn";
import AudioSeekBar from "@/components/nano/AudioSeekBar";
import AudioVolumeController from "@/components/nano/VolumeController";
import CancelPlayingBtn from "@/components/nano/CancelPlayingBtn";
import PlayerMaximizeBtn from "@/components/nano/PlayerMaximizeBtn";
import PlayTime from "@/components/nano/PlayTime";
import PlayDuration from "@/components/nano/PlayDuration";

function BottomPlayerBar() {
  const { episode, epImgUrl, dispatch } = usePlayerState();
  const { windowWidth } = useWindowSize();

  if (!episode) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 w-full rounded-t-[10px] border bg-background flex justify-between gap-1 p-2 md:px-4">
      <div className="w-full md:w-1/4 lg:w-[30%] md:max-w-64 flex gap-2 md:gap-4 items-center">
        <Avatar
          className="h-14 w-14"
          onClick={() => {
            if (windowWidth < 768)
              dispatch({ type: "updateFullScreen", payload: true });
          }}>
          <AvatarImage src={epImgUrl} alt={episode.title} />
          <AvatarFallback>
            <AudioLines size={24} />
          </AvatarFallback>
        </Avatar>
        <div
          className="w-full md:min-w-48 md:max-w-64"
          onClick={() => {
            if (windowWidth < 768)
              dispatch({ type: "updateFullScreen", payload: true });
          }}>
          <TypographyP className="font-semibold line-clamp-1">
            {episode.title || episode?.itunesTitle}
          </TypographyP>
          <TypographyMuted className="line-clamp-1">
            {episode?.author || episode?.itunesAuthor}
          </TypographyMuted>
        </div>
        {windowWidth >= 1024 && <EpLikeBtn guid={episode.guid} />}
        {windowWidth < 768 && <EpPlayBtn />}
      </div>
      {windowWidth >= 768 && (
        <>
          <div className="w-4/6 lg:w-2/5 max-w-3xl h-full flex flex-col justify-center">
            <div className="flex gap-3 justify-center items-center">
              <EpSkipBackBtn />
              <EpPlayBtn size="small" />
              <EpSkipForwardBtn />
            </div>
            <div className="flex items-center gap-2">
              <PlayTime />
              <AudioSeekBar />
              <PlayDuration />
            </div>
          </div>
          <div className="lg:w-[30%] max-w-64 flex justify-end items-center gap-4">
            {windowWidth >= 1024 && <AudioVolumeController />}
            <PlayerMaximizeBtn />
            {windowWidth >= 1024 && <CancelPlayingBtn />}
          </div>
        </>
      )}
    </div>
  );
}

export default BottomPlayerBar;
