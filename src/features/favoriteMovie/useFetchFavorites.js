import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { flattenArray, removeDuplicates } from "../../utils/utils";
import { useGetFavorite } from "./useGetFavorite";

const fetchForFavoriteMedia = async (data) => {
  const { mediaType, mediaId } = data;
  const res = await axios.get(`${mediaType}/${mediaId}`);
  return {
    ...res.data,
    explore: mediaType,
  };
};

export function useFetchFavorite() {
  const queryClient = useQueryClient();

  const {
    mutate: fetchFavorite,
    isPending: isMutating,
    isError,
  } = useMutation({
    mutationFn: fetchForFavoriteMedia,
    onSuccess: (favMedia) => {
      queryClient.setQueryData(["getFavorites"], (prevData) => {
        const favorites = prevData ? [...prevData, favMedia] : [favMedia];
        const flatArray = flattenArray(favorites);
        const uniqueArray = removeDuplicates(flatArray, "id");

        return uniqueArray;
      });
    },
    onError: (err) => {
      throw new Error("ERROR", err.message);
    },
  });

  return { fetchFavorite, isMutating, isError };
}

export function useGetFavorites() {
  const { fetchFavorite, isMutating, isError } = useFetchFavorite();
  const { favorites, isFetching } = useGetFavorite();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["getFavorites"],
    initialData: [],
  });

  const filterCurrentData = useMemo(() => {
    return favorites?.flatMap((favorite) =>
      data.filter((item) => +item.id === +favorite.mediaId)
    );
  }, [favorites, data]);

  useEffect(() => {
    if (!favorites.length) return;
    favorites.forEach(({ mediaType, mediaId }) => {
      fetchFavorite({ mediaType, mediaId });
    });
  }, [favorites, fetchFavorite, queryClient]);

  return { filterCurrentData, isLoading: isFetching || isMutating, isError };
}
