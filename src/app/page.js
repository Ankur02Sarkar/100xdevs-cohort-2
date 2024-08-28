"use client";
import React from "react";
import CohortSelection from "@/components/CohortSelection";
import Login from "@/components/Login";
import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <CohortSelection /> : <Login />;
};

export default Home;
