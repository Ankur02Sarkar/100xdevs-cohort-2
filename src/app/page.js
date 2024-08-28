"use client";
import React, { useEffect, useState } from "react";
import CohortSelection from "@/components/CohortSelection";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";

const Home = () => {
  const [authState, setAuthState] = useState(false);
  const { data } = useSession();
  useEffect(() => {
    console.log("session data : ", data);
    if (data && data?.user?.email === "admin@100xdevs.com") {
      setAuthState(true);
    }
  }, [data]);
  return authState ? <CohortSelection /> : <Login />;
};

export default Home;
