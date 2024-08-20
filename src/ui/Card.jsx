import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import noImage from "../../public/img/no-image.jpg";
import { useFetchData } from "../hooks/useFetchData";
import { formatDate } from "../utils/utils";
import Heading from "./Heading";

const Card = React.memo(function Card({ data, trending, index, media_type }) {
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);

  const mediaType = useMemo(
    () => data?.media_type ?? media_type,
    [data, media_type]
  );

  const imageSrc = useMemo(
    () =>
      data?.poster_path
        ? `https://img.gs/cqpctgbwgd/160x100,3x/${imageURL}${data.poster_path}`
        : noImage,
    [data, imageURL]
  );

  const releaseDate = useMemo(
    () => formatDate(data?.release_date || data?.first_air_date),
    [data]
  );
  const rating = useMemo(() => data?.vote_average?.toFixed(1), [data]);

  return (
    <Link
      to={`/${mediaType}/${data?.id}`}
      className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all duration-300"
    >
      <img
        src={imageSrc}
        alt={`image of ${mediaType}`}
        loading="lazy"
        width={230}
        height={320}
        className="object-cover w-full h-full"
      />

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
          <p className="text-neutral-500">{releaseDate}</p>
          <p className="text-[12px] flex items-center gap-x-1 bg-black/50 backdrop-blur-3xl overflow-hidden text-neutral-300 rounded-md px-1.5 font-bold">
            Rating: {rating}
          </p>
        </div>
      </div>
    </Link>
  );
});

export default Card;
