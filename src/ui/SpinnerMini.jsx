import { LoaderCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

function SpinnerMini({ className }) {
  return (
    <LoaderCircle
      className={twMerge("w-6 h-6 animate-spin text-[#2332a4f6]", className)}
    />
  );
}

export default SpinnerMini;
