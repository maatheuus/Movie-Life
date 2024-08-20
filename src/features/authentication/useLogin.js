import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../api/authApi";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: (data) => loginAPI(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/");
    },
    onError: (err) => {
      if (err.message.includes("401"))
        toast.error("Incorrect email or password");
      else toast.error(err.message);
    },
  });

  return { isLoading, login };
}
