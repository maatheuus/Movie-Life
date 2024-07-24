import { IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import InputSearch from "./InputSearch";

function FormSearch({ className, children }) {
  return (
    <form
      className={`${className} items-center gap-2 border-none sm:border-b sm:border-b-zinc-100`}
    >
      {children}
    </form>
  );
}

export default FormSearch;
