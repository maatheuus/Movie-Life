import { useQuery } from "@tanstack/react-query";
import { getFavMedia } from "../../api/movieApi";
import { useUser } from "../authentication/useUser";

export function useGetFavorite() {
  const { user } = useUser();

  const { data: favorites, isLoading: isFetching } = useQuery({
    enabled: !!user,
    queryKey: ["getFavorite"],
    initialData: [],
    queryFn: () => getFavMedia({ userId: user?._id }),
    refetchOnWindowFocus: false,
  });

  return { favorites, isFetching };
}
