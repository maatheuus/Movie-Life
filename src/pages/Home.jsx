import BannerHome from "../ui/BannerHome";
import { useFetchData } from "../hooks/useFetchData";
import Card from "../ui/Card";
import Heading from "../ui/Heading";
import HorizontalScrollCard from "../ui/HorizontalScrollCard";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Home() {
  // const { data: trendingData } = useFetchData(
  //   (state) => state.movieData.bannerData
  // );

  // const { data: nowPlaying } = useFetch("/movie/now_playing");
  // const { data: topRatedMovies } = useFetch("/movie/top_rated");
  // const { data: mostPopularTvShows } = useFetch("/tv/popular");
  // const { data: topRatedTvShows } = useFetch("/tv/top_rated");
  // const { data: onAirShows } = useFetch("/tv/on_the_air");

  const ficctionData = Array.from({ length: 15 });

  return (
    <div>
      {/* <BannerHome /> */}
      {/**
      <HorizontalScrollCard
        moviesData={trendingData}
        heading="Treading"
        trending
      />
       * 
      <div>
        <Heading
          as="h2"
          label="Movies"
          className="px-6 !text-2xl text-blue-700"
        />
        <HorizontalScrollCard
          moviesData={nowPlaying}
          heading="Now Playing Movies"
        />
        <HorizontalScrollCard
          moviesData={topRatedMovies}
          heading="Top Rated Movies"
        />
      </div>

      <div>
        <Heading
          as="h2"
          label="Tv Shows"
          className="px-6 !text-2xl text-blue-700"
        />
        <HorizontalScrollCard
          moviesData={mostPopularTvShows}
          heading="Popular Tv Shows"
        />
        <HorizontalScrollCard
          moviesData={topRatedTvShows}
          heading="Top Rated Tv Shows"
        />
        <HorizontalScrollCard moviesData={onAirShows} heading="On The Air" />
      </div>
     */}
    </div>
  );
}

export default Home;
