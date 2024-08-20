import { useState, useCallback } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { ButtonPlay } from "./ButtonPlay";
import ScrollButtons from "./ScrollButtons";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

function BannerHome() {
  const { data: bannerData } = useFetchData(
    (state) => state.movieData.bannerData
  );
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImage((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  }, [bannerData.length]);

  const handlePrevious = useCallback(() => {
    setCurrentImage((prev) => (prev <= 0 ? bannerData.length - 1 : prev - 1));
  }, [bannerData.length]);

  const jumpToBanner = useCallback((index) => {
    setCurrentImage(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) return handleNext();
      if (currentImage >= bannerData.length - 1) return setCurrentImage(0);
    }, 10000);
    return () => clearInterval(interval);
  }, [bannerData, currentImage, handleNext]);

  if (bannerData.length === 0) {
    return <Spinner />;
  }

  return (
    <section className="w-full h-full relative mb-16 lg:mb-0">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden group">
        {bannerData.map((data) => {
          return (
            <div
              key={data.id}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
                transition: "all 1.6s ease",
              }}
            >
              <div className="w-full h-full">
                <img
                  src={`https://img.gs/cqpctgbwgd/full/${
                    imageURL + data.backdrop_path
                  }`}
                  alt={`image of ${data.name || data.title}`}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  className="object-cover w-full h-full"
                />
              </div>

              {/**button next and preview image */}
              <div className="absolute top-0 h-full w-full flex lg:hidden items-center justify-between group-hover:sm:flex">
                <ScrollButtons
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                />
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto">
                <div className=" w-full absolute bottom-0 max-w-md px-5">
                  <h2 className="font-bold text-2xl lg:text-4xl text-stone-100 drop-shadow-2xl">
                    {data.name || data.title}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-x-4">
                      <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                      <spam>|</spam>
                      <p>Views : {Number(data.popularity).toFixed(0)}</p>
                    </div>

                    <div className="flex gap-x-5">
                      <ButtonPlay
                        to={`/${data.media_type}/${data.id}`}
                        className="flex gap-x-4 z-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-40 w-full absolute -bottom-10 lg:-bottom-0 flex justify-center items-center space-x-2 lg:space-x-3.5">
        {[...Array(bannerData.length)].map((banner, index) => (
          <button
            aria-label="current button being shown"
            key={index}
            onClick={() => jumpToBanner(index)}
            className={twMerge(
              "w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gray-500 hover:bg-gray-300",
              index === currentImage &&
                "!bg-gray-100 w-5 lg:w-7 transition-all duration-500"
            )}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default BannerHome;
