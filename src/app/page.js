"use client";
import React, { useEffect, useState } from "react";
import CohortSelection from "@/components/CohortSelection";
import Login from "@/components/Login";

const Home = () => {
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    window?.chrome?.storage?.sync?.get("authState", (result) => {
      console.log("result : ", result);

      if (result.authState) {
        setAuthState(true);
      }
    });
  }, []);
  return authState ? <CohortSelection /> : <Login />;
};

export default Home;
