import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data, fetchStatus } = useQuery({ queryKey: ["user"] });

  const user = data?.data?.user;
  const isAuthenticated = data?.role === "authenticated";
  const token = data?.token;

  return { user, isAuthenticated, fetchStatus, token };
}
