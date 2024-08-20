import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export function useSendToken() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [token, setToken] = useState();

  const { mutate: sendToken, isPending: isLoading } = useMutation({
    mutationFn: (data) => setToken(data),
    onSuccess: () => {
      queryClient.setQueryData(["token"], token);
      navigate("/new_password");
    },
    onError: () => {
      console.log("Error");

      toast.error("Something wen wrong while send token, try again later!");
    },
  });

  return { sendToken, isLoading };
}
