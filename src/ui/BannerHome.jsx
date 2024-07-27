import { FaPlayCircle, FaRegBookmark } from "react-icons/fa";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import Spinner from "./Spinner";

function BannerHome() {
  const { data: bannerData } = useFetchData(
    (state) => state.movieData.bannerData
  );
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);

  const [currentImage, setCurrentImage] = useState(0);

  function handleNext() {
    setCurrentImage((prev) => prev + 1);
  }

  function handlePrevious() {
    setCurrentImage((prev) => prev - 1);
  }

  function jumpToBanner(index) {
    setCurrentImage(index);
  }

  /**AVIVAR ESSA FUNCIONALIDADE DEPOIS */
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (currentImage < bannerData.length - 1) return handleNext();
  //       if (currentImage >= bannerData.length - 1) return setCurrentImage(0);
  //     }, 10000);
  //     return () => clearInterval(interval);
  //   }, [bannerData, currentImage]);

  if (bannerData.length === 0) {
    return <Spinner />;
  }

  return (
    <section className="w-full h-full relative">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden group">
        {bannerData.map((data) => {
          return (
            <div
              key={data.id}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
                transition: "all 1.5s ease",
              }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  alt={`image of the ${data.name || data.title}`}
                  className="h-full object-cover w-full"
                />
              </div>

              {/**button next and preview image */}

              <div className="z-40 absolute top-0 h-full w-full hidden items-center justify-between group-hover:sm:flex">
                <IconButton
                  onClick={handlePrevious}
                  aria-label="back"
                  size="large"
                  color="inherit"
                >
                  <IoIosArrowDropleftCircle />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  aria-label="forward"
                  size="large"
                  color="inherit"
                >
                  <IoIosArrowDroprightCircle />
                </IconButton>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto z-50">
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

                    <div className="flex gap-x-4 z-50">
                      <Button
                        variant="outlined"
                        startIcon={<FaPlayCircle />}
                        sx={{
                          background: "#2332a4f6",
                          color: "white",
                          ":hover": {
                            background: "#2332a4f6",
                            color: "white",
                          },
                        }}
                      >
                        Play now
                      </Button>
                      <Button variant="outlined" startIcon={<FaRegBookmark />}>
                        Watch Later
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-40 absolute -bottom-10 lg:-bottom-0 w-full flex justify-center items-center space-x-3">
        {[...Array(bannerData.length)].map((banner, index) => (
          <button
            key={banner}
            onClick={() => jumpToBanner(index)}
            className={`w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 ${
              index === currentImage && "!bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default BannerHome;
