import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../api/authApi";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: (data) => loginAPI(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/");
    },
    onError: () => console.log("Error"),
  });

  return { isLoading, login };
}
