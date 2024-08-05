import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../api/authApi";

export function useForgot() {
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: sendEmail } = useMutation({
    mutationFn: (email) => forgotPassword(email),
    onSuccess: () => navigate("/reset"),
    onError: (error) => console.log("error", error),
  });

  return { isLoading, sendEmail };
}
