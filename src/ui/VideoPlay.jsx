import { CircleX } from "lucide-react";
import { useFetch } from "../hooks/useFetch";

function VideoPlay({ videoId, close, params }) {
  const { data: video } = useFetch(`${params}/${videoId}/videos`);

  const displayVideo =
    video?.map((el) => el).filter((el) => el?.name.includes(" Trailer")) || [];

  return (
    <section className="z-[9999] fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black w-full h-[80vh] max-w-screen-lg aspect-video rounded overflow-hidden relative p-6">
        <button onClick={close} className="absolute right-4 top-3 text-3xl">
          <CircleX />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${displayVideo[0]?.key}`}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

export default VideoPlay;
