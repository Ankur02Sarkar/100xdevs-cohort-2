import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: sessionData } = useSession();

  return Boolean(sessionData?.user?.email === "admin@100xdevs.com");
}
