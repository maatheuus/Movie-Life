import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyPassword } from "../../api/userApi";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const { token } = useUser();
  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate: updatePassword } = useMutation({
    mutationFn: (data) => {
      return updateMyPassword(token, data);
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], () => user);
      toast.success("User updated successfully", {
        position: "bottom-center",
      });
    },
    onError: (err) => console.error("error", err),
  });

  return { isLoading, updatePassword };
}
