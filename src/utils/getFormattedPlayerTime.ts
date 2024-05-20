export default function getFormattedPlayerTime(
  currentTime: number,
  maxTill?: number
) {
  // inputs are in sec.
  if (maxTill && currentTime > maxTill) return "--:--";

  const currentHr = Math.floor(currentTime / (60 * 60));
  const currentMin = Math.floor((currentTime % (60 * 60)) / 60);
  const currentSec = Math.floor(currentTime % 60);

  const formattedCurrentMin = formatNum(currentMin, 2);
  const formattedCurrentSec = formatNum(currentSec, 2);

  if (maxTill) {
    // count the number of character of hour
    const hrCharCount =
      Math.floor(maxTill / (60 * 60)) > 0
        ? Math.floor(maxTill / (60 * 60)).toString().length
        : 0;

    const formattedCurrentHr = formatNum(currentHr, hrCharCount, true);

    return (
      (formattedCurrentHr ? formattedCurrentHr + ":" : "") +
      formattedCurrentMin +
      ":" +
      formattedCurrentSec
    );
  }

  return (
    (currentHr.toString().length > 0 ? currentHr.toString() + ":" : "") +
    formattedCurrentMin +
    ":" +
    formattedCurrentSec
  );
}

function formatNum(
  num: number,
  charCount: number,
  canReturnEmptyStr?: boolean
): string {
  if (charCount === 0 && canReturnEmptyStr) return "";

  if (num === 0) return "0".repeat(charCount);

  if (num.toString().length === charCount) return num.toString();

  return `${"0".repeat(charCount - num.toString().length)}${num}`;
}
