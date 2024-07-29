import bgImage from "../../../public/movie_wallpaper.jpg";
import { RiMovie2Line } from "react-icons/ri";

function LayoutAuth({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen relative">
        <div
          className="w-full bg-cover absolute top-0 h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"></div>
        </div>

        <div className="flex items-center w-full max-w-lg mx-auto z-50">
          <div className="bg-stone-950 flex-1 py-16 px-10 rounded-lg">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <RiMovie2Line className="w-auto h-10 sm:h-8" />
              </div>

              <p className="mt-3 text-neutral-100 text-xl">{title}</p>
            </div>

            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutAuth;
