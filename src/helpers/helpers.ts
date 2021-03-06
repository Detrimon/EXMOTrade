export const dateTimeFormat = (timeMs: number) => {
  return Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    minute: "2-digit",
    hour: "2-digit",
    second: "2-digit",
  }).format(new Date(timeMs));
};

export const numberFormat = (number: number) => {
  return Intl.NumberFormat("ru-RU").format(number);
};
