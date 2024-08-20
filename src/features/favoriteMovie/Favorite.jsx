import { Siren } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Card from "../../ui/Card";
import EmptyList from "../../ui/EmptyList";
import Filter from "../../ui/Filter";
import Spinner from "../../ui/Spinner";
import { useGetFavorites } from "./useFetchFavorites";

function Favorite() {
  const { filterCurrentData: data, isLoading, isError } = useGetFavorites();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("filter");

  let filteredMedia;

  if (params === "all" || params === null) filteredMedia = data;
  if (params === "movies")
    filteredMedia = data.filter((item) => item.explore === "movie");
  if (params === "tvshows")
    filteredMedia = data.filter((item) => item.explore === "tv");

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div className="w-full text-center absolute top-1/2 text-xl">
        <p className="flex gap-x-1 items-center justify-center flex-col sm:flex-row">
          <Siren className="text-blue-600" />
          Sorry, something when wrong when load your watchlist.
        </p>
        <p>Try reload the page or try again later!</p>
      </div>
    );

  return (
    <div className="pt-16 px-4">
      <div className="container mx-auto">
        <div className="w-full flex gap-y-3 flex-col my-4">
          <h1 className="capitalize text-2xl lg:text-xl font-semibold">
            Watchlist
          </h1>
          <Filter />
        </div>

        {filteredMedia.length === 0 && <EmptyList params={params} />}

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-3 justify-center lg:justify-start">
          {filteredMedia?.map((exploreData, index) => (
            <Card
              key={exploreData?.id}
              data={exploreData}
              index={index}
              media_type={exploreData?.explore ?? "unknown"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
