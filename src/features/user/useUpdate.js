import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../api/userApi";
import { useUser } from "../authentication/useUser";

export function useUpdate() {
  const { token } = useUser();
  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate: update } = useMutation({
    mutationFn: (data) => {
      return updateUser(token, data);
    },
    onSuccess: (user) => {
      // console.log("Success", user);
      // queryClient.invalidateQueries(["user"]);
      queryClient.setQueryData(["user"], () => user);
    },
    onError: (err) => console.error("error", err),
  });

  return { isLoading, update };
}
