import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const CohortSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Select a Cohort
      </h2>
      <div className="space-y-4">
        <Link href="/cohort/0-1">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md shadow-md">
            Cohort 0-1
          </Button>
        </Link>
        <Link href="/cohort/1-100">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md shadow-md">
            Cohort 1-100
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CohortSelection;
