import { ImSpinner2 } from "react-icons/im";
import { twMerge } from "tailwind-merge";

function SpinnerMini({ className }) {
  return (
    <ImSpinner2
      className={twMerge("w-6 h-6 animate-spin text-[#2332a4f6]", className)}
    />
  );
}

export default SpinnerMini;
