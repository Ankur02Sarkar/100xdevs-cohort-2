import Link from "next/link";
import React from "react";

const RestrictedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Access Restricted
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Please log in to view course materials.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Home
      </Link>
    </div>
  );
};

export default RestrictedPage;
