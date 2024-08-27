import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const CohortSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-all">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Select a Cohort
      </h2>
      <div className="space-y-4 w-full max-w-sm md:max-w-md lg:max-w-lg">
        <Link href="/cohort/0-1">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            Cohort 0-1
          </Button>
        </Link>
        <div className="h-4 md:h-6"></div> {/* Gap between buttons */}
        <Link href="/cohort/1-100">
          <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            Cohort 1-100
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CohortSelection;
