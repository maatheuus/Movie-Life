import { useDispatch } from "react-redux";
import { fetchConfig, fetchTrendingData } from "../api/movieApi";
import { setBannerData, setImageURL } from "../store/movieSlice";
import { useSelector } from "react-redux";

export function useFetchData(render = () => {}) {
  const data = useSelector(render);
  const dispatch = useDispatch();

  async function handleFetchConfig() {
    const response = await fetchConfig();
    dispatch(setImageURL(response.data.images.secure_base_url + "original"));
  }

  async function handleFetch() {
    const response = await fetchTrendingData();
    dispatch(setBannerData(response));
  }
  return { data, handleFetch, handleFetchConfig };
}
