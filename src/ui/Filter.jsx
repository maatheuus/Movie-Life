import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterChange(value) {
    const filterValue = value.toLowerCase().split(" ").join("");
    searchParams.set("filter", filterValue);
    setSearchParams(searchParams);
  }

  const optionsFilter = [
    { label: "All" },
    { label: "Movies" },
    { label: "TV shows" },
  ];

  return (
    <div className="flex gap-x-2">
      {optionsFilter.map(({ label }) => (
        <button
          key={label}
          onClick={() => handleFilterChange(label)}
          className="py-3 px-3 text-left text-sm bg-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-300 hover:scale-105 rounded-md font-semibold"
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
