import { format, parseISO, isValid } from "date-fns";

const formatDate = dateStr => {
  if (!dateStr) return "N/A";
  const date = parseISO(dateStr);
  return isValid(date) ? format(date, "d MMM yyyy") : "N/A";
};

const formatNumber = (
  value,
  {
    decimals = 1,
    lowercase = false,
    useShortForm = false // K, Cr, L
  } = {}
) => {
  if (value == null || isNaN(value)) return "N/A";

  const num = Number(value);
  const isNegative = num < 0;
  const absNum = Math.abs(num);

  const units = [
    { value: 1e9, label: "Arab", short: "Ar" },
    { value: 1e7, label: "Crore", short: "Cr" },
    { value: 1e5, label: "Lakh", short: "L" },
    { value: 1e3, label: "Thousand", short: "K" }
  ];

  for (let unit of units) {
    if (absNum >= unit.value) {
      let formatted = (absNum / unit.value)
        .toFixed(decimals)
        .replace(/\.0+$/, "");

      let label = useShortForm ? unit.short : unit.label;
      if (lowercase) label = label.toLowerCase();

      return `${isNegative ? "-" : ""}${formatted} ${label}`;
    }
  }

  return `${isNegative ? "-" : ""}${absNum.toLocaleString("en-IN")}`;
};

export { formatDate, formatNumber };
