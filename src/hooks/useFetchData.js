import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfig, fetchTrendingData } from "../api/movieApi";
import { setBannerData, setImageURL } from "../store/movieSlice";

export function useFetchData(render = () => {}) {
  const data = useSelector(render);
  const dispatch = useDispatch();

  const handleFetchConfig = useMemo(() => {
    return async () => {
      const response = await fetchConfig();
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    };
  }, [dispatch]);

  const handleFetch = useMemo(() => {
    return async () => {
      const response = await fetchTrendingData();
      dispatch(setBannerData(response));
    };
  }, [dispatch]);

  return { data, handleFetch, handleFetchConfig };
}
