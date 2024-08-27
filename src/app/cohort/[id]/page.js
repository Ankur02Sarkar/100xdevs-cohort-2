"use client";
import { cohort2Data } from "@/app/assets/data";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CourseDisplay = () => {
  const [mediaData, setMediaData] = useState(cohort2Data);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleWeekClick = (weekNum) => {
    router.push(`/week/${weekNum}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMediaData = mediaData.filter((week) =>
    week.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Course Materials
      </h2>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMediaData.length > 0 ? (
          filteredMediaData.map((week, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
              onClick={() => handleWeekClick(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {week.title}
              </h3>
              {/* Additional content can be added here, such as a description or media preview */}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-800 dark:text-gray-100 col-span-full">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDisplay;
