import moment from "moment";
import { useFetchData } from "../hooks/useFetchData";
import { FaStar } from "react-icons/fa";

import Heading from "./Heading";
import { Link } from "react-router-dom";

function CardInput({ data, media_type }) {
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);

  const mediaType = data?.media_type ?? media_type;

  return (
    <Link
      to={`/${mediaType}/${data?.id}`}
      className="w-full min-w-[210px] max-w-[210px] h-80 overflow-hidden block rounded relative my-4 mx-auto  border-4 border-white"
    >
      <img src={imageURL + data?.poster_path} loading="lazy" />

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
        </div>
      </div>
    </Link>
  );
}

export default CardInput;
