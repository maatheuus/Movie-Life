import { useState } from "react";
import { useParams } from "react-router-dom";
import CastSection from "../features/details/CastSection ";
import DetailsSection from "../features/details/DetailsSection";
import ImageHeader from "../features/details/ImageHeader";
import PosterSection from "../features/details/PosterSection";
import ProvidersSection from "../features/details/ProvidersSection";
import { useFetch } from "../hooks/useFetch";
import { useFetchData } from "../hooks/useFetchData";
import useFetchDetails from "../hooks/useFetchDetails";
import HorizontalScrollCard from "../ui/HorizontalScrollCard";
import VideoPlay from "../ui/VideoPlay";
import { calculateDuration, getNamesFromCrew } from "../utils/utils";
import Spinner from "../ui/Spinner";

function DetailsPage() {
  const { explore, id } = useParams();
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);
  const { data = [], loading: loadingData } = useFetchDetails(
    `/${explore}/${id}`
  );
  const { data: castData } = useFetchDetails(`/${explore}/${id}/credits`);
  const { data: similarData } = useFetch(`/${explore}/${id}/similar`);
  const { data: recommendationData } = useFetch(
    `/${explore}/${id}/recommendations`
  );
  const { data: providers } = useFetch(`${explore}/${id}/watch/providers`);

  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const duration = calculateDuration(data?.runtime);
  const writer =
    getNamesFromCrew(castData?.crew, "Story") ||
    getNamesFromCrew(castData?.crew, "Writer");
  const director = getNamesFromCrew(castData?.crew, "Producer");

  const open = () => setPlayVideo(true);
  const close = () => setPlayVideo(false);

  const handleVideo = (id) => {
    setPlayVideoId(id);
    open();
  };

  if (loadingData) return <Spinner />;

  return (
    <div className="container mx-auto py-16 lg:py-0">
      <ImageHeader
        imageURL={imageURL}
        backdropPath={data?.backdrop_path}
        title={data?.title || data?.name}
      />
      <div className="px-4">
        <div className="flex flex-col my-3 lg:flex-row gap-5 lg:gap-10">
          <PosterSection
            imageURL={imageURL}
            posterPath={data?.poster_path}
            onPlay={() => handleVideo(data.id)}
          />
          <DetailsSection
            data={data}
            duration={duration}
            director={director}
            writer={writer}
          />
        </div>
        <CastSection castData={castData} imageURL={imageURL} />
        <ProvidersSection providers={providers} imageURL={imageURL} />
        <div>
          <HorizontalScrollCard
            moviesData={recommendationData}
            heading={"Recommendation " + explore}
          />
          <HorizontalScrollCard
            moviesData={similarData}
            heading={"Similar " + explore}
            media_type={explore}
          />
        </div>
        {playVideo && (
          <VideoPlay videoId={playVideoId} close={close} params={explore} />
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
