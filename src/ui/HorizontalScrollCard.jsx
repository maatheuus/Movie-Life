import React, { useRef, useCallback } from "react";
import Card from "./Card";
import Heading from "./Heading";
import ScrollButtons from "./ScrollButtons";

const HorizontalScrollCard = React.memo(
  function HorizontalScrollCard({
    moviesData = [],
    heading,
    trending,
    media_type,
  }) {
    const containerRef = useRef();

    const handleNext = useCallback(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1450;
      }
    }, []);

    const handlePrevious = useCallback(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 1450;
      }
    }, []);

    return (
      <div className="container mx-auto px-6 mb-10 mt-5">
        <Heading as="h2" label={heading} className="mb-3 text-neutral-300" />

        <div className="relative">
          <div
            ref={containerRef}
            className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-40 scroll-smooth transition-all scrollbar-none"
          >
            {moviesData.map((data) => (
              <Card
                key={data?.id}
                data={data}
                trending={trending}
                media_type={media_type}
              />
            ))}
          </div>
          <div className="absolute top-0 h-full w-full hidden lg:flex items-center justify-between">
            <ScrollButtons
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.moviesData === nextProps.moviesData &&
      prevProps.heading === nextProps.heading &&
      prevProps.trending === nextProps.trending &&
      prevProps.media_type === nextProps.media_type
    );
  }
);

export default HorizontalScrollCard;
