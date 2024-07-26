import { useRef } from "react";
import Card from "./Card";
import Heading from "./Heading";
import { IconButton } from "@mui/material";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function HorizontalScrollCard({ moviesData = [], heading, trending }) {
  const containerRef = useRef();

  function handleNext() {
    containerRef.current.scrollLeft += 1450;
  }

  function handlePrevious() {
    containerRef.current.scrollLeft -= 1450;
  }

  return (
    <div className="container mx-auto px-6 mb-10 mt-5">
      <Heading as="h2" label={heading} className="mb-3 text-neutral-300" />

      <div className="relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-40 scroll-smooth transition-all scrollbar-none"
        >
          {moviesData.map((data, index) => (
            <Card
              key={data?.id}
              data={data}
              index={index + 1}
              trending={trending}
            />
          ))}
        </div>

        <div className="absolute top-0 h-full w-full hidden lg:flex items-center justify-between">
          <IconButton
            onClick={handlePrevious}
            aria-label="back"
            size="large"
            color="inherit"
            className="z-40"
          >
            <IoIosArrowDropleftCircle />
          </IconButton>
          <IconButton
            onClick={handleNext}
            aria-label="forward"
            size="large"
            color="inherit"
            className="z-40"
          >
            <IoIosArrowDroprightCircle />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScrollCard;
