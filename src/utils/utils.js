import moment from "moment";

export function formatDate(date) {
  return moment(date).format("MMMM Do YYYY");
}

export function formatLocale(number) {
  return Number(number).toLocaleString("en-US");
}

export function calculateDuration(runtime) {
  const [hours, minutes] = (runtime / 60)?.toFixed(1)?.split(".") || [];
  return `${hours}h ${minutes}m`;
}

export function getNamesFromCrew(crew, jobTitle) {
  return (
    crew
      ?.filter(({ job }) => job === jobTitle)
      ?.map(({ name }) => name)
      ?.join(", ") || ""
  );
}

export function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

export function removeDuplicates(arr, prop) {
  return [...new Map(arr.map((item) => [item[prop], item])).values()];
}
