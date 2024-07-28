import { Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchNavigation } from "../hooks/useFetch";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";
import SpinnerMini from "../ui/SpinnerMini";
import { formatLocale } from "../utils/utils";

function ExplorePage() {
  const { explore } = useParams();
  const [page, setPage] = useState(1);
  const { data, isLoading, totalResults } = useFetchNavigation(
    explore,
    page,
    setPage
  );

  if (data.length === 0) {
    return <Spinner />;
  }
  return (
    <div className="pt-16 px-4">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center my-4">
          <h3 className="capitalize text-lg lg:text-xl font-semibold">
            Popular {explore === "tv" ? `${explore} shows` : `${explore}s`}
          </h3>
          <p className="text-sm text-neutral-400">
            Total Results: {formatLocale(totalResults)}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData, index) => (
            <Card
              key={exploreData.id}
              data={exploreData}
              index={index}
              media_type={explore}
            />
          ))}
        </div>
        {data.length > 0 && (
          <div className="w-full flex justify-center py-8">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              {isLoading ? <SpinnerMini /> : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplorePage;
