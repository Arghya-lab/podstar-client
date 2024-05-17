export default function formatEpisodeDuration(durationInSec: number) {
  const Hr = Math.floor(durationInSec / (60 * 60));
  const Min = Math.floor((durationInSec % (60 * 60)) / 60);

  if (Hr > 0) {
    return `${Hr}hr ${Min.toString().padStart(2, "0")}min`;
  }
  if (Min > 0) {
    return `${Min}min`;
  }

  const Sec = Math.floor(durationInSec / 60);
  return `${Sec.toString().padStart(2, "0")}sec`;
}
