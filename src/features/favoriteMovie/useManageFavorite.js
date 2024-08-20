import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { addFavorite, getFavStatus, removeFavorite } from "../../api/movieApi";
import { useUser } from "../authentication/useUser";

export function useManageFavorite() {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useUser();

  const { mutate: addFav, isPending: isAdding } = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      toast.success("Added to the whatlist", {
        className: "bg-green-200 text-green-700",
        position: "top-left",
      });
      queryClient.invalidateQueries({ queryKey: ["favoriteStatus"] });
      queryClient.invalidateQueries({ queryKey: ["getFavorite"] });
    },
    onError: () => {
      if (!isAuthenticated) return;
      toast.error(`Error while add to the whatlist`, {
        className: "bg-red-200 text-red-700",
      });
    },
  });
  const { mutate: removeFav, isPending: isRemoving } = useMutation({
    mutationFn: removeFavorite,
    onSuccess: () => {
      toast.success("Removed from the whatlist", {
        className: "bg-green-200 text-green-700",
      });
      queryClient.invalidateQueries({ queryKey: ["favoriteStatus"] });
    },
    onError: () =>
      toast.error(`Error while remove from the whatlist`, {
        className: "bg-red-200 text-red-700",
      }),
  });
  return { addFav, removeFav, isLoading: isAdding || isRemoving };
}

export function useFavoriteStatus() {
  const [queryData, setQueryData] = useState({});

  const { data: favoriteStatus } = useQuery({
    enabled: !!queryData,
    queryKey: ["favoriteStatus", queryData.mediaId],
    queryFn: () => getFavStatus(queryData),
    refetchOnWindowFocus: false,
  });

  return { favoriteStatus, setQueryData };
}
