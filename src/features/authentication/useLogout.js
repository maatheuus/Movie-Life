import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/");
    },
  });

  return { isLoading, logout };
}
