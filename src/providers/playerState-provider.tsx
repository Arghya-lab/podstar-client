import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useRef,
} from "react";
import ReactPlayer from "react-player";
import { PlayerStateType, PlayerStateContextType } from "@/@types/playerState";
import isMobileDevice from "@/utils/isMobileDevice";
import playerStateReducer from "@/providers/reducers/playerStateReducer";
import { EpisodeType } from "@/@types/podcast";

export const episodeDemo: EpisodeType = {
  author: "",
  contentEncoded:
    '\u003Cp\u003ESean Carroll is a theoretical physicist, author, and host of Mindscape podcast. Please support this podcast by checking out our sponsors:\u003Cbr /\u003E\n&#8211; \u003Cb\u003EHiddenLayer\u003C/b\u003E: \u003Ca href="https://hiddenlayer.com/lex"\u003Ehttps://hiddenlayer.com/lex\u003C/a\u003E\u003Cbr /\u003E\n&#8211; \u003Cb\u003ECloaked\u003C/b\u003E: \u003Ca href="https://cloaked.com/lex"\u003Ehttps://cloaked.com/lex\u003C/a\u003E and use code LexPod to get 25% off\u003Cbr /\u003E\n&#8211; \u003Cb\u003ENotion\u003C/b\u003E: \u003Ca href="https://notion.com/lex"\u003Ehttps://notion.com/lex\u003C/a\u003E\u003Cbr /\u003E\n&#8211; \u003Cb\u003EShopify\u003C/b\u003E: \u003Ca href="https://shopify.com/lex"\u003Ehttps://shopify.com/lex\u003C/a\u003E to get $1 per month trial\u003Cbr /\u003E\n&#8211; \u003Cb\u003ENetSuite\u003C/b\u003E: \u003Ca href="http://netsuite.com/lex"\u003Ehttp://netsuite.com/lex\u003C/a\u003E to get free product tour\u003C/p\u003E\n\u003Cp\u003ETranscript: \u003Ca href="https://lexfridman.com/sean-carroll-3-transcript"\u003Ehttps://lexfridman.com/sean-carroll-3-transcript\u003C/a\u003E\u003C/p\u003E\n\u003Cp\u003E\u003Cb\u003EEPISODE LINKS:\u003C/b\u003E\u003Cbr /\u003E\nSean&#8217;s Website: \u003Ca href="https://preposterousuniverse.com"\u003Ehttps://preposterousuniverse.com\u003C/a\u003E\u003Cbr /\u003E\nMindscape Podcast: \u003Ca href="https://www.preposterousuniverse.com/podcast/"\u003Ehttps://www.preposterousuniverse.com/podcast/\u003C/a\u003E\u003Cbr /\u003E\nSean&#8217;s YouTube: \u003Ca href="https://youtube.com/@seancarroll"\u003Ehttps://youtube.com/@seancarroll\u003C/a\u003E\u003Cbr /\u003E\nSean&#8217;s Patreon: \u003Ca href="https://www.patreon.com/seanmcarroll"\u003Ehttps://www.patreon.com/seanmcarroll\u003C/a\u003E\u003Cbr /\u003E\nSean&#8217;s Twitter: \u003Ca href="https://twitter.com/seanmcarroll"\u003Ehttps://twitter.com/seanmcarroll\u003C/a\u003E\u003Cbr /\u003E\nSean&#8217;s Instagram: \u003Ca href="https://instagram.com/seanmcarroll"\u003Ehttps://instagram.com/seanmcarroll\u003C/a\u003E\u003Cbr /\u003E\nSean&#8217;s Papers: \u003Ca href="https://scholar.google.com/citations?user=Lfifrv8AAAAJ"\u003Ehttps://scholar.google.com/citations?user=Lfifrv8AAAAJ\u003C/a\u003E\u003Cbr /\u003E\nSean&#8217;s Books: \u003Ca href="https://amzn.to/3W7yT9N"\u003Ehttps://amzn.to/3W7yT9N\u003C/a\u003E\u003C/p\u003E\n\u003Cp\u003E\u003Cb\u003EPODCAST INFO:\u003C/b\u003E\u003Cbr /\u003E\nPodcast website: \u003Ca href="https://lexfridman.com/podcast"\u003Ehttps://lexfridman.com/podcast\u003C/a\u003E\u003Cbr /\u003E\nApple Podcasts: \u003Ca href="https://apple.co/2lwqZIr"\u003Ehttps://apple.co/2lwqZIr\u003C/a\u003E\u003Cbr /\u003E\nSpotify: \u003Ca href="https://spoti.fi/2nEwCF8"\u003Ehttps://spoti.fi/2nEwCF8\u003C/a\u003E\u003Cbr /\u003E\nRSS: \u003Ca href="https://lexfridman.com/feed/podcast/"\u003Ehttps://lexfridman.com/feed/podcast/\u003C/a\u003E\u003Cbr /\u003E\nYouTube Full Episodes: \u003Ca href="https://youtube.com/lexfridman"\u003Ehttps://youtube.com/lexfridman\u003C/a\u003E\u003Cbr /\u003E\nYouTube Clips: \u003Ca href="https://youtube.com/lexclips"\u003Ehttps://youtube.com/lexclips\u003C/a\u003E\u003C/p\u003E\n\u003Cp\u003E\u003Cb\u003ESUPPORT &amp; CONNECT:\u003C/b\u003E\u003Cbr /\u003E\n&#8211; Check out the sponsors above, it&#8217;s the best way to support this podcast\u003Cbr /\u003E\n&#8211; Support on Patreon: \u003Ca href="https://www.patreon.com/lexfridman"\u003Ehttps://www.patreon.com/lexfridman\u003C/a\u003E\u003Cbr /\u003E\n&#8211; Twitter: \u003Ca href="https://twitter.com/lexfridman"\u003Ehttps://twitter.com/lexfridman\u003C/a\u003E\u003Cbr /\u003E\n&#8211; Instagram: \u003Ca href="https://www.instagram.com/lexfridman"\u003Ehttps://www.instagram.com/lexfridman\u003C/a\u003E\u003Cbr /\u003E\n&#8211; LinkedIn: \u003Ca href="https://www.linkedin.com/in/lexfridman"\u003Ehttps://www.linkedin.com/in/lexfridman\u003C/a\u003E\u003Cbr /\u003E\n&#8211; Facebook: \u003Ca href="https://www.facebook.com/lexfridman"\u003Ehttps://www.facebook.com/lexfridman\u003C/a\u003E\u003Cbr /\u003E\n&#8211; Medium: \u003Ca href="https://medium.com/@lexfridman"\u003Ehttps://medium.com/@lexfridman\u003C/a\u003E\u003C/p\u003E\n\u003Cp\u003E\u003Cb\u003EOUTLINE:\u003C/b\u003E\u003Cbr /\u003E\nHere&#8217;s the timestamps for the episode. On some podcast players you should be able to click the timestamp to jump to that time.\u003Cbr /\u003E\n(00:00) &#8211; Introduction\u003Cbr /\u003E\n(11:03) &#8211; General relativity\u003Cbr /\u003E\n(23:22) &#8211; Black holes\u003Cbr /\u003E\n(28:11) &#8211; Hawking radiation\u003Cbr /\u003E\n(32:19) &#8211; Aliens\u003Cbr /\u003E\n(41:15) &#8211; Holographic principle\u003Cbr /\u003E\n(1:05:38) &#8211; Dark energy\u003Cbr /\u003E\n(1:11:38) &#8211; Dark matter\u003Cbr /\u003E\n(1:20:34) &#8211; Quantum mechanics\u003Cbr /\u003E\n(1:41:56) &#8211; Simulation\u003Cbr /\u003E\n(1:44:18) &#8211; AGI\u003Cbr /\u003E\n(1:58:42) &#8211; Complexity\u003Cbr /\u003E\n(2:11:25) &#8211; Consciousness\u003Cbr /\u003E\n(2:20:32) &#8211; Naturalism\u003Cbr /\u003E\n(2:24:49) &#8211; Limits of science\u003Cbr /\u003E\n(2:29:34) &#8211; Mindscape podcast\u003Cbr /\u003E\n(2:39:29) &#8211; Einstein\u003C/p\u003E\n',
  description:
    "Sean Carroll is a theoretical physicist, author, and host of Mindscape podcast. Please support this podcast by checking out our sponsors:\r\n- HiddenLayer: https://hiddenlayer.com/lex\r\n- Cloaked: https://cloaked.com/lex and use code LexPod to get 25% off\r\n- Notion: https://notion.com/lex\r\n- Shopify: https://shopify.com/lex to get $1 per month trial\r\n- NetSuite: http://netsuite.com/lex to get free product tour\r\n\r\nTranscript: https://lexfridman.com/sean-carroll-3-transcript\r\n\r\nEPISODE LINKS:\r\nSean's Website: https://preposterousuniverse.com\r\nMindscape Podcast: https://www.preposterousuniverse.com/podcast/\r\nSean's YouTube: https://youtube.com/@seancarroll\r\nSean's Patreon: https://www.patreon.com/seanmcarroll\r\nSean's Twitter: https://twitter.com/seanmcarroll\r\nSean's Instagram: https://instagram.com/seanmcarroll\r\nSean's Papers: https://scholar.google.com/citations?user=Lfifrv8AAAAJ\r\nSean's Books: https://amzn.to/3W7yT9N\r\n\r\nPODCAST INFO:\r\nPodcast website: https://lexfridman.com/podcast\r\nApple Podcasts: https://apple.co/2lwqZIr\r\nSpotify: https://spoti.fi/2nEwCF8\r\nRSS: https://lexfridman.com/feed/podcast/\r\nYouTube Full Episodes: https://youtube.com/lexfridman\r\nYouTube Clips: https://youtube.com/lexclips\r\n\r\nSUPPORT & CONNECT:\r\n- Check out the sponsors above, it's the best way to support this podcast\r\n- Support on Patreon: https://www.patreon.com/lexfridman\r\n- Twitter: https://twitter.com/lexfridman\r\n- Instagram: https://www.instagram.com/lexfridman\r\n- LinkedIn: https://www.linkedin.com/in/lexfridman\r\n- Facebook: https://www.facebook.com/lexfridman\r\n- Medium: https://medium.com/@lexfridman\r\n\r\nOUTLINE:\r\nHere's the timestamps for the episode. On some podcast players you should be able to click the timestamp to jump to that time.\r\n(00:00) - Introduction\r\n(11:03) - General relativity\r\n(23:22) - Black holes\r\n(28:11) - Hawking radiation\r\n(32:19) - Aliens\r\n(41:15) - Holographic principle\r\n(1:05:38) - Dark energy\r\n(1:11:38) - Dark matter\r\n(1:20:34) - Quantum mechanics\r\n(1:41:56) - Simulation\r\n(1:44:18) - AGI\r\n(1:58:42) - Complexity\r\n(2:11:25) - Consciousness\r\n(2:20:32) - Naturalism\r\n(2:24:49) - Limits of science\r\n(2:29:34) - Mindscape podcast\r\n(2:39:29) - Einstein",
  enclosure: {
    url: "https://media.blubrry.com/takeituneasy/content.blubrry.com/takeituneasy/lex_ai_sean_carroll_3.mp3",
    type: "audio/mpeg",
  },
  guid: "https://lexfridman.com/?p=5880",
  itunesAuthor: "Lex Fridman",
  itunesDuration: 9880,
  itunesEpisode: "",
  itunesEpisodeType: "full",
  itunesExplicit: "false",
  itunesSubtitle:
    "Sean Carroll is a theoretical physicist, author, and host of Mindscape podcast. Please support this podcast by checking out our sponsors: - HiddenLayer: https://hiddenlayer.com/lex - Cloaked: https://cloaked.",
  itunesSummary:
    "Sean Carroll is a theoretical physicist, author, and host of Mindscape podcast. Please support this podcast by checking out our sponsors:\u003Cbr /\u003E\r\n- HiddenLayer: https://hiddenlayer.com/lex\u003Cbr /\u003E\r\n- Cloaked: https://cloaked.com/lex and use code LexPod to get 25% off\u003Cbr /\u003E\r\n- Notion: https://notion.com/lex\u003Cbr /\u003E\r\n- Shopify: https://shopify.com/lex to get $1 per month trial\u003Cbr /\u003E\r\n- NetSuite: http://netsuite.com/lex to get free product tour\u003Cbr /\u003E\r\n\u003Cbr /\u003E\r\nTranscript: https://lexfridman.com/sean-carroll-3-transcript\u003Cbr /\u003E\r\n\u003Cbr /\u003E\r\nEPISODE LINKS:\u003Cbr /\u003E\r\nSean's Website: https://preposterousuniverse.com\u003Cbr /\u003E\r\nMindscape Podcast: https://www.preposterousuniverse.com/podcast/\u003Cbr /\u003E\r\nSean's YouTube: https://youtube.com/@seancarroll\u003Cbr /\u003E\r\nSean's Patreon: https://www.patreon.com/seanmcarroll\u003Cbr /\u003E\r\nSean's Twitter: https://twitter.com/seanmcarroll\u003Cbr /\u003E\r\nSean's Instagram: https://instagram.com/seanmcarroll\u003Cbr /\u003E\r\nSean's Papers: https://scholar.google.com/citations?user=Lfifrv8AAAAJ\u003Cbr /\u003E\r\nSean's Books: https://amzn.to/3W7yT9N\u003Cbr /\u003E\r\n\u003Cbr /\u003E\r\nPODCAST INFO:\u003Cbr /\u003E\r\nPodcast website: https://lexfridman.com/podcast\u003Cbr /\u003E\r\nApple Podcasts: https://apple.co/2lwqZIr\u003Cbr /\u003E\r\nSpotify: https://spoti.fi/2nEwCF8\u003Cbr /\u003E\r\nRSS: https://lexfridman.com/feed/podcast/\u003Cbr /\u003E\r\nYouTube Full Episodes: https://youtube.com/lexfridman\u003Cbr /\u003E\r\nYouTube Clips: https://youtube.com/lexclips\u003Cbr /\u003E\r\n\u003Cbr /\u003E\r\nSUPPORT & CONNECT:\u003Cbr /\u003E\r\n- Check out the sponsors above, it's the best way to support this podcast\u003Cbr /\u003E\r\n- Support on Patreon: https://www.patreon.com/lexfridman\u003Cbr /\u003E\r\n- Twitter: https://twitter.com/lexfridman\u003Cbr /\u003E\r\n- Instagram: https://www.instagram.com/lexfridman\u003Cbr /\u003E\r\n- LinkedIn: https://www.linkedin.com/in/lexfridman\u003Cbr /\u003E\r\n- Facebook: https://www.facebook.com/lexfridman\u003Cbr /\u003E\r\n- Medium: https://medium.com/@lexfridman\u003Cbr /\u003E\r\n\u003Cbr /\u003E\r\nOUTLINE:\u003Cbr /\u003E\r\nHere's the timestamps for the episode. On some podcast players you should be able to click the timestamp to jump to that time.\u003Cbr /\u003E\r\n(00:00) - Introduction\u003Cbr /\u003E\r\n(11:03) - General relativity\u003Cbr /\u003E\r\n(23:22) - Black holes\u003Cbr /\u003E\r\n(28:11) - Hawking radiation\u003Cbr /\u003E\r\n(32:19) - Aliens\u003Cbr /\u003E\r\n(41:15) - Holographic principle\u003Cbr /\u003E\r\n(1:05:38) - Dark energy\u003Cbr /\u003E\r\n(1:11:38) - Dark matter\u003Cbr /\u003E\r\n(1:20:34) - Quantum mechanics\u003Cbr /\u003E\r\n(1:41:56) - Simulation\u003Cbr /\u003E\r\n(1:44:18) - AGI\u003Cbr /\u003E\r\n(1:58:42) - Complexity\u003Cbr /\u003E\r\n(2:11:25) - Consciousness\u003Cbr /\u003E\r\n(2:20:32) - Naturalism\u003Cbr /\u003E\r\n(2:24:49) - Limits of science\u003Cbr /\u003E\r\n(2:29:34) - Mindscape podcast\u003Cbr /\u003E\r\n(2:39:29) - Einstein",
  itunesTitle: "",
  link: "https://lexfridman.com/sean-carroll-3/?utm_source=rss&utm_medium=rss&utm_campaign=sean-carroll-3",
  pubDate: "Mon, 22 Apr 2024 19:25:24 +0000",
  title:
    "#428 – Sean Carroll: General Relativity, Quantum Mechanics, Black Holes & Aliens",
};
export const epImgUrlDemo =
  "https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png";

const defaultPlayerState: PlayerStateType = {
  episode: null,
  epImgUrl: "",
  playing: false,
  volume: isMobileDevice() ? 1 : 0.8, //  value -> 0-1
  muted: false,
  played: 0, //  value -> 0-1
  formattedCurrentTime: "00:00",
  formattedRemainTime: "00:00",
  formattedPlayedTimeType: "current",
  duration: 0,
  formattedDuration: "00:00",
  loaded: 0,
  playbackRate: 1.0,
  buffering: false,
  playerFullScreen: false,
  playingCanceled: true,
  isMobileDevice: isMobileDevice(),
  timeStamps: [],
};

const PlayerStateContext = createContext<PlayerStateContextType>({
  ...defaultPlayerState,
  audioPlayerRef: null,
  handleSkipBack: () => {},
  handleSkipForward: () => {},
  handleSkipTo: () => {},
  dispatch: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayerState = () => useContext(PlayerStateContext);

export function PlayerStateProvider({ children }: { children: ReactNode }) {
  const skipBackSec = 10;
  const skipForwardSec = 10;

  const audioPlayerRef = useRef<ReactPlayer>(null);
  const [state, dispatch] = useReducer(playerStateReducer, defaultPlayerState);

  const handleSkipBack = () => {
    if (audioPlayerRef?.current) {
      audioPlayerRef.current.seekTo(
        state.played * state.duration - skipBackSec
      );
    }
  };

  const handleSkipForward = () => {
    if (audioPlayerRef?.current) {
      audioPlayerRef.current.seekTo(
        state.played * state.duration + skipForwardSec
      );
    }
  };

  const handleSkipTo = (amount: number, type?: "seconds" | "fraction") => {
    if (audioPlayerRef?.current) {
      audioPlayerRef.current.seekTo(amount, type);
    }
  };

  // useEffect(() => {
  //   dispatch({
  //     type: "setNewEpisode",
  //     payload: { episode: episodeDemo, epImgUrl: epImgUrlDemo },
  //   });
  // }, []);

  return (
    <PlayerStateContext.Provider
      value={{
        ...state,
        audioPlayerRef,
        handleSkipBack,
        handleSkipForward,
        handleSkipTo,
        dispatch,
      }}>
      {children}
    </PlayerStateContext.Provider>
  );
}
