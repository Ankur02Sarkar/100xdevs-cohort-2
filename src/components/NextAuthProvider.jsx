"use client";

import { SessionProvider } from "next-auth/react";
import { FloatingDockDemo } from "./FloatingDockDemo";

export const NextAuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
      <FloatingDockDemo />
    </SessionProvider>
  );
};
