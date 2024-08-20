import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAccount as deleteAccountApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
export function useDelete() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteAccount, isPending: isDeleting } = useMutation({
    mutationFn: deleteAccountApi,
    onSuccess: () => {
      queryClient.clear();
      navigate("/login");
    },
    onError: (err) => console.log(err),
  });

  return { deleteAccount, isDeleting };
}
