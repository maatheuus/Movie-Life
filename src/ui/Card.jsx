import { useFetchData } from "../hooks/useFetchData";

function Card({ data }) {
  const { data: imageURL } = useFetchData((state) => state.movieData.imageURL);

  return (
    <div className="w-full max-w-[230px] h-80 overflow-hidden rounded">
      <img src={imageURL + data?.poster_path} />
    </div>
  );
}

export default Card;
