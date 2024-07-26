import { Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchNavigation } from "../hooks/useFetch";
import Card from "../ui/Card";
import { ImSpinner9, ImSpinner2 } from "react-icons/im";

function ExplorePage() {
  const { explore } = useParams();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetchNavigation(explore, page, setPage);

  if (data.length === 0) {
    return (
      <ImSpinner9 className="w-14 h-14 animate-spin text-[#2332a4f6] absolute top-1/2 left-1/2" />
    );
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-2">
          Popular {explore === "tv" ? `${explore} shows` : `${explore}s`}
        </h3>

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
              {isLoading ? (
                <ImSpinner2 className="w-6 h-6 animate-spin text-[#2332a4f6] " />
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplorePage;
