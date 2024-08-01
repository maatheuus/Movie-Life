import { useState } from "react";
import { ButtonPlay, ButtonFavorite } from "../../ui/ButtonPlay";
import { useUser } from "../authentication/useUser";
import { useNavigate } from "react-router-dom";
function PosterSection({ imageURL, posterPath, onPlay }) {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  function handleFavorite() {
    if (!isAuthenticated) navigate("/login");
    setFavorite((prev) => !prev);
  }

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
          isFavorite={favorite}
          renderFavorite={handleFavorite}
        />
      </div>
    </div>
  );
}

export default PosterSection;
