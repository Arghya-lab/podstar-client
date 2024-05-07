import { format, isSameYear } from "date-fns";

export default function formatDate(dateString: string) {
  const includeYear = !isSameYear(dateString, new Date());
  const formattedDate = format(
    dateString,
    includeYear ? "MMMM d, yyyy" : "MMMM d"
  );
  return formattedDate;
}
