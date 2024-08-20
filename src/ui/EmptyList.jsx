import { Link } from "react-router-dom";

function EmptyList({ params }) {
  const textDynamic =
    params === null ||
    (params === "all" && "Your Watchlist is currently empty") ||
    (params === "movies" && "You have no movies on Your Watchlist") ||
    (params === "tvshows" && "You have no TV shows on Your Watchlist");

  return (
    <div className="text-center w-full mt-12">
      <p className="text-base sm:text-lg">{textDynamic}</p>
      <p className="text-base sm:text-lg">
        Add{" "}
        <Link to="/tv" className="underline">
          TV shows
        </Link>{" "}
        and{" "}
        <Link to="/movie" className="underline">
          Movies
        </Link>{" "}
        that you want to watch later by clicking Add to Watchlist.
      </p>
    </div>
  );
}

export default EmptyList;
