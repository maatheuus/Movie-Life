import { useState } from "react";

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
          {isExpanded ? "Show less" : "Show more..."}
        </button>
      </div>
    </>
  );
}

export function CastList({ castData, imageURL }) {
  const castItems = castData?.cast
    ?.filter((el) => el?.profile_path)
    .map((starCast, index) => (
      <div key={index} className="cast-item">
        <img
          src={imageURL + starCast?.profile_path}
          alt={starCast?.name}
          className="w-24 h-24 object-cover rounded-full"
          loading="lazy"
        />
        <p className="font-bold text-center text-sm text-neutral-400 text-ellipsis line-clamp-1">
          {starCast?.name}
        </p>
      </div>
    ));

  return <ExpanderCast>{castItems}</ExpanderCast>;
}
