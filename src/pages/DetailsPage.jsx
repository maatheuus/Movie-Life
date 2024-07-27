import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useFetchData } from "../hooks/useFetchData";
import moment from "moment";
import Divider from "../ui/Divider";
import { useState } from "react";
import HorizontalScrollCard from "../ui/HorizontalScrollCard";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@mui/material";
import { FaPlayCircle, FaRegBookmark } from "react-icons/fa";

function DetailsPage() {
  const { explore, id } = useParams();
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);
  const { data = [] } = useFetchDetails(`/${explore}/${id}`);
  const { data: castData } = useFetchDetails(`/${explore}/${id}/credits`);
  const { data: similarData } = useFetch(`/${explore}/${id}/similar`);
  const { data: recommendationData } = useFetch(
    `/${explore}/${id}/recommendations`
  );

  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");

  console.log(castData);
  const writer = castData?.crew
    ?.filter((el) => el?.job === "Story")
    ?.map((el) => el?.name)
    ?.join(", ");

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            alt={`image of the ${data?.title || data?.name}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60 flex flex-col gap-4">
          <img
            src={imageURL + data?.poster_path}
            alt={`image of the ${data?.title || data?.name}`}
            className="h-80 w-60 object-cover rounded"
          />
          <div className="flex flex-col gap-y-5">
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

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-stone-100">
            {data.title || data.name}
          </h2>
          <p className="text-neutral-400 ">{data.tagline}</p>

          <Divider />

          <div className="flex items-center gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-stone-100 mb-1">Overview</h3>
            <p>{data?.overview}</p>
          </div>
          <div className="flex items-center gap-3 my-3 text-center">
            <p>Status : {data?.status}</p>
            <span>|</span>
            <p>
              Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}
            </p>
            <span>|</span>
            <p>Revenue : {Number(data?.revenue).toLocaleString("en-US")}</p>
          </div>

          <Divider />

          <div>
            <p>
              <span className="text-stone-100">Director</span> :{" "}
              {castData?.crew[0]?.name}
            </p>

            <Divider />

            <p>
              <span className="text-stone-100">Writer : {writer}</span>
            </p>
          </div>

          <Divider />

          <h2 className="font-bold text-lg">Cast :</h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
            <CastList castData={castData} imageURL={imageURL} />
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard
          moviesData={similarData}
          heading={"Similar " + explore}
        />
        <HorizontalScrollCard
          moviesData={recommendationData}
          heading={"Recommendation " + explore}
        />
      </div>
    </div>
  );
}

function ExpanderCast({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const numItemsToShow = 10;
  const displayCast = isExpanded
    ? children
    : children?.slice(0, numItemsToShow);

  return (
    <>
      {displayCast}
      <div className="flex items-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="hover:underline hover:text-blue-700"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  );
}

function CastList({ castData, imageURL }) {
  const castItems = castData?.cast
    ?.filter((el) => el?.profile_path)
    .map((starCast, index) => (
      <div key={index} className="cast-item">
        <img
          src={imageURL + starCast?.profile_path}
          alt={starCast?.name}
          className="w-24 h-24 object-cover rounded-full"
        />
        <p className="font-bold text-center text-sm text-neutral-400">
          {starCast?.name}
        </p>
      </div>
    ));

  return <ExpanderCast>{castItems}</ExpanderCast>;
}

export default DetailsPage;
