import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../api/authApi";

export function getToken() {
  const { data } = useQuery({
    queryKey: ["token"],
  });

  return data;
}

export function useResetPassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: resetPassword } = useMutation({
    mutationFn: (token, updatePassword) =>
      resetPasswordApi(token, updatePassword),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      // navigate("/login");
    },
    onError: (error) => console.log("error", error),
  });

  return { isLoading, resetPassword };
}
