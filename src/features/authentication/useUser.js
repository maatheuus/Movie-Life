import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data } = useQuery({ queryKey: ["user"] });

  const user = data?.data?.user;
  const isAuthenticated = data?.role === "authenticated";

  return { user, isAuthenticated };
}
