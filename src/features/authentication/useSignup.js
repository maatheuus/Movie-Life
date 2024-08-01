import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupAPI } from "../../api/authApi";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: signup } = useMutation({
    mutationFn: (data) => signupAPI(data),
    onSuccess: (user) => {
      console.log("success", user);
      queryClient.setQueryData(["user"], user);
      navigate("/");
    },
    onError: () => console.log("Error"),
  });

  return { isLoading, signup };
}
