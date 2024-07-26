import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function useFetch(endPoint, query = null) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchNowPlayingData() {
    try {
      setIsLoading(true);
      const res = await axios.get(endPoint, query);
      setData(res.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNowPlayingData();
  }, []);

  return { isLoading, data };
}

export function useFetchNavigation(explore, page, setPage) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await axios.get(`discover/${explore}`, {
        params: { page },
      });
      setData((prev) => {
        const existingIds = new Set(prev.map((item) => item.id));
        const newResults = res.data.results.filter(
          (item) => !existingIds.has(item.id)
        );
        return [...prev, ...newResults];
      });
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData();
  }, [explore]);

  return { isLoading, data };
}
