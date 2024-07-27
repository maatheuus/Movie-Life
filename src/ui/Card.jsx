import moment from "moment";
import { useFetchData } from "../hooks/useFetchData";
import { FaStar } from "react-icons/fa";
import noImage from "../../public/no-image.jpg";
import Heading from "./Heading";
import { Link } from "react-router-dom";

function Card({ data, trending, index, media_type }) {
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);

  const mediaType = data?.media_type ?? media_type;

  return (
    <Link
      to={`/${mediaType}/${data?.id}`}
      className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 hover:rotate-2 transition-all duration-300"
    >
      {data?.poster_path ? (
        <img src={imageURL + data?.poster_path} alt="image the movie/tv show" />
      ) : (
        <img src={noImage} alt="image not available" />
      )}

      <div className="absolute top-3">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden">
            #{index} Trending
          </div>
        )}
      </div>

      <div className="absolute flex flex-col gap-y-2 bottom-0 h-16 px-2 py-1 backdrop-blur-3xl w-full bg-black/60 overflow-hidden">
        <Heading
          as="h2"
          className="!text-lg text-ellipsis line-clamp-1 font-semibold"
          label={data?.title || data?.name}
        />
        <div className="text-sm flex justify-between">
          <p className="text-neutral-500">
            {moment(data?.release_date || data?.first_air_date).format(
              "MMM Do YY"
            )}
          </p>
          <p className="text-[12px] flex items-center gap-x-1 bg-black/50 backdrop-blur-3xl overflow-hidden text-neutral-300 rounded-md px-1.5 font-bold">
            {data?.vote_average?.toFixed(1)}
            <FaStar />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
