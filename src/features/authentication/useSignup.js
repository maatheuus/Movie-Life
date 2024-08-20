import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupAPI } from "../../api/authApi";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: signup } = useMutation({
    mutationFn: (data) => signupAPI(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/");
    },
    onError: () => toast.error("Something bad happen, try again please!"),
  });

  return { isLoading, signup };
}
