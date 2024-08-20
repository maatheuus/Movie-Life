import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../../api/authApi";
import toast from "react-hot-toast";

export function useForgot() {
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: sendEmail } = useMutation({
    mutationFn: (email) => forgotPassword(email),
    onSuccess: () => navigate("/reset"),
    onError: (error) => {
      toast.error("There is no user with this email address");
      console.error("error", error);
    },
  });

  return { isLoading, sendEmail };
}
