import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetchNavigation } from "../hooks/useFetch";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";
import SpinnerMini from "../ui/SpinnerMini";
import { formatLocale } from "../utils/utils";

function ExplorePage() {
  const { explore } = useParams();
  const { data, isLoading, totalResults, fetchNextPage, hasNextPage } =
    useFetchNavigation(explore);

  if (isLoading && data.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center my-4 px-10">
          <h3 className="capitalize text-lg lg:text-xl font-semibold">
            Popular {explore === "tv" ? `${explore} shows` : `${explore}s`}
          </h3>
          <p className="text-sm text-neutral-400">
            Total Results: {formatLocale(totalResults)}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-y-6 gap-x-4 pl-12 justify-center lg:justify-start">
          {data.map((exploreData, index) => (
            <Card
              key={exploreData.id}
              data={exploreData}
              index={index}
              media_type={explore}
            />
          ))}
        </div>
        {data.length > 0 && hasNextPage && (
          <div className="w-full flex justify-center py-8">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                fetchNextPage();
              }}
            >
              {isLoading ? <SpinnerMini className="text-white" /> : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplorePage;
