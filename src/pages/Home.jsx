import BannerHome from "../ui/BannerHome";
import { useFetchData } from "../hooks/useFetchData";
import Heading from "../ui/Heading";
import HorizontalScrollCard from "../ui/HorizontalScrollCard";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../ui/Spinner";

function Home() {
  const { data: trendingData } = useFetchData(
    (state) => state.movieData.bannerData
  );

  const { data: nowPlaying, isLoading } = useFetch("/movie/now_playing");
  const { data: topRatedMovies } = useFetch("/movie/top_rated");
  const { data: mostPopularTvShows } = useFetch("/tv/popular");
  const { data: topRatedTvShows } = useFetch("/tv/top_rated");

  if (isLoading) return <Spinner />;

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        moviesData={trendingData}
        heading="Treading"
        trending
      />
      <div>
        <Heading as="h2" label="Movies" className="px-6 !text-2xl font-bold" />
        <HorizontalScrollCard
          moviesData={nowPlaying}
          heading="Now Playing Movies"
          media_type="movie"
        />
        <HorizontalScrollCard
          moviesData={topRatedMovies}
          heading="Top Rated Movies"
          media_type="movie"
        />
      </div>
      <div>
        <Heading
          as="h2"
          label="Tv Shows"
          className="px-6 !text-2xl font-bold"
        />
        <HorizontalScrollCard
          moviesData={mostPopularTvShows}
          heading="Popular Tv Shows"
          media_type="tv"
        />
        <HorizontalScrollCard
          moviesData={topRatedTvShows}
          heading="Top Rated Tv Shows"
          media_type="tv"
        />
      </div>
    </div>
  );
}

export default Home;
