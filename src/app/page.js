"use client";
import React, { useState } from "react";
import CohortSelection from "@/components/CohortSelection";
import Login from "@/components/Login";

const Home = () => {
  const [authState, setAuthState] = useState(true);
  return authState ? (
    <CohortSelection setAuthState={setAuthState} />
  ) : (
    <Login setAuthState={setAuthState} />
  );
};

export default Home;
