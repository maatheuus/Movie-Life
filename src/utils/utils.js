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
