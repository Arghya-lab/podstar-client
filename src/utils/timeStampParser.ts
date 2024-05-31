// import { timeStampType } from "@/@types/playerState";

// export default function timeStampParser(text: string): timeStampType[] {
//   if (text === "") return [];

//   const pattern = /\(?(\d{1,2})(?::(\d{2}))?(?::(\d{2}))?\)?\s*–\s*([^(\n]+)/g;
//   const matches = Array.from(text.matchAll(pattern));
//   console.log(matches);

//   return matches.map((match) => {
//     const hours = match[3] ? match[1] || "00" : "00";
//     const minutes = match[3] ? match[2] || "00" : match[1];
//     const seconds = match[3] ? match[3] || "00" : match[2];
//     console.log(hours, minutes, seconds);

//     const value =
//       (isNaN(Number(hours)) ? 0 : Number(hours)) * 60 * 60 +
//       (isNaN(Number(minutes)) ? 0 : Number(minutes)) * 60 +
//       (isNaN(Number(seconds)) ? 0 : Number(seconds));

//     const readableTimestamp = `${hours.padStart(2, "0")}:${minutes.padStart(
//       2,
//       "0"
//     )}:${seconds.padStart(2, "0")}`;

//     const description = match[4].trim();

//     return { value, readableTimestamp, description };
//   });
// }
