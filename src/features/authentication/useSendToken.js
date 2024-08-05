import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useSendToken() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [token, setToken] = useState();

  const { mutate: sendToken, isPending: isLoading } = useMutation({
    mutationFn: (data) => setToken(data),
    onSuccess: () => {
      //   console.log(token);
      queryClient.setQueryData(["token"], token);
      navigate("/newPassword");
    },
    onError: () => console.log("Error"),
  });

  return { sendToken, isLoading };
}
