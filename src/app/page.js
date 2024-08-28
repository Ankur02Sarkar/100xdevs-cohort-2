"use client";
import React, { useEffect, useState } from "react";
import CohortSelection from "@/components/CohortSelection";
import Login from "@/components/Login";

const Home = () => {
  const [authState, setAuthState] = useState(false);
  return authState ? <CohortSelection /> : <Login />;
};

export default Home;
