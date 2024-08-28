import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: sessionData } = useSession();

  return {
    isAdmin: Boolean(sessionData?.user?.email === "admin@100xdevs.com"),
    userId: sessionData?.user?.id,
  };
}
