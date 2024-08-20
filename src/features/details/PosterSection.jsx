import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonFavorite, ButtonPlay } from "../../ui/ButtonPlay";
import { useUser } from "../authentication/useUser";
import {
  useFavoriteStatus,
  useManageFavorite,
} from "../favoriteMovie/useManageFavorite";

function PosterSection({ imageURL, posterPath, onPlay, data }) {
  const { explore } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useUser();

  const { addFav, removeFav, isLoading } = useManageFavorite();
  const { favoriteStatus, setQueryData } = useFavoriteStatus();

  function handleFavoriteClick(movieData) {
    if (!isAuthenticated) navigate("/login");

    const filterData = {
      userId: user?._id,
      mediaId: movieData?.id,
      mediaType: explore,
    };

    if (favoriteStatus?.isFavorite) {
      removeFav({ userId: user?._id, mediaId: data?.id });
    } else addFav(filterData);
  }

  useEffect(() => {
    setQueryData({ userId: user?._id, mediaId: data?.id });
  }, [setQueryData, data?.id, user?._id, isAuthenticated, navigate]);

  return (
    <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60 flex flex-col gap-4">
      <img
        src={imageURL + posterPath}
        alt="Poster"
        loading="lazy"
        className="h-80 w-60 object-cover rounded"
      />
      <div className="flex justify-between">
        <ButtonPlay renderPlay={onPlay} />
        <ButtonFavorite
          renderPlay={onPlay}
          isLoading={isLoading}
          isFavorite={favoriteStatus?.isFavorite}
          renderFavorite={() => {
            handleFavoriteClick(data);
          }}
        />
      </div>
    </div>
  );
}

export default PosterSection;
