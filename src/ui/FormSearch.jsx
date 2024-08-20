import { twMerge } from "tailwind-merge";

function FormSearch({ className, children }) {
  return (
    <form
      className={twMerge(
        "border-none bg-black bg-opacity-40 px-2  items-center rounded-3xl sm:border-b sm:border-b-zinc-100",
        className
      )}
    >
      {children}
    </form>
  );
}

export default FormSearch;
