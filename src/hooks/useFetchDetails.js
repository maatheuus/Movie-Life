import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function useFetchDetails(endpoint) {
  const queryClient = useQueryClient();

  const {
    data = [],
    mutate: fetchDetails,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async () => {
      const res = await axios.get(endpoint);
      const movieData = {
        ...res.data,
        isBookmarked: false,
      };
      return movieData;
    },

    onSuccess: (data) => {
      queryClient.setQueryData(["currentMovie"], data);
    },
    onError: (error) => {
      console.log("ERROR", error);
    },
  });

  useEffect(() => {
    fetchDetails();
  }, [endpoint]);

  return { data, isLoading };
}
