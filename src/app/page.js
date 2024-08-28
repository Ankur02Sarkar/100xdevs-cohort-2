"use client";
import React from "react";
import CohortSelection from "@/components/CohortSelection";
import Login from "@/components/Login";
import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const { isAdmin } = useAuth();
  return isAdmin ? <CohortSelection /> : <Login />;
};

export default Home;
