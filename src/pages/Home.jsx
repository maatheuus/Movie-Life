import BannerHome from "../ui/BannerHome";
import { useFetchData } from "../hooks/useFetchData";
import Card from "../ui/Card";
import Heading from "../ui/Heading";

function Home() {
  const { data: trendingData } = useFetchData(
    (state) => state.movieData.bannerData
  );
  return (
    <div>
      <BannerHome />
      <div className="container mx-auto px-3 my-14">
        <Heading as="h2" label="Treading Shows" className="mb-3" />
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4">
          {trendingData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
