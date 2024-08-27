import {
  tenant,
  PasskeyProvider,
} from "@teamhanko/passkeys-next-auth-provider";

export const authOptions = {
  providers: [
    PasskeyProvider({
      tenant: tenant({
        apiKey: process.env.PASSKEYS_API_KEY,
        tenantId: process.env.NEXT_PUBLIC_PASSKEYS_TENANT_ID,
      }),
      async authorize({ userId }) {
        const user = {
          id: userId,
          name: "John Doe",
          email: "john.doe@example.com",
        };
        if (!user) return null;
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    session: ({ session, token }) => {
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.sub,
          },
        };
      } else {
        return session;
      }
    },
  },
};
