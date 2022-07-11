/**
 * DATE FORMATTER
 * Formats a date number, e.g. Date.now(), returns a string like "Month dd, yyyy".
 */
export const formatDate = (date: number): string => {
  if (isNaN(date)) return "Invalid date.";

  const dateObj: Date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
};
