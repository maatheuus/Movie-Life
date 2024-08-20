import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchNowPlayingData(endPoint, query) {
  if (!endPoint) return [];
  const { data } = await axios.get(endPoint, query);
  return data.results;
}
export function useFetch(endPoint, query = null) {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchData", endPoint, query],
    queryFn: () => fetchNowPlayingData(endPoint, query),
    refetchOnWindowFocus: false,
    enabled: !!endPoint,
    staleTime: 5 * 60 * 1000, // 5 min
    cacheTime: 30 * 60 * 1000, // 30 min
  });

  return { isLoading, data };
}

async function fetchData({ pageParam = 1, queryKey }) {
  const explore = queryKey[1];

  try {
    const { data } = await axios.get(`discover/${explore}`, {
      params: { page: pageParam },
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Error fetching data");
  }
}

export function useFetchNavigation(explore) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["fetchNavigation", explore],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 5 * 60 * 1000, // 5 min
    cacheTime: 30 * 60 * 1000, // 30 min
  });

  const allData =
    data?.pages.flatMap((page) =>
      page.results.map((movieData) => ({
        ...movieData,
        isBookmarked: false,
      }))
    ) || [];

  return {
    isLoading,
    data: allData,
    totalResults: data?.pages[0]?.total_results,
    fetchNextPage,
    hasNextPage,
  };
}
