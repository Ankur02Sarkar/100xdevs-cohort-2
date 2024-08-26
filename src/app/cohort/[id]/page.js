"use client";
import { cohort2Data } from "@/app/assets/data";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CourseDisplay = () => {
  const [mediaData, setMediaData] = useState(cohort2Data);
  const router = useRouter();

  const handleWeekClick = (weekNum) => {
    router.push(`/week/${weekNum}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Course Materials
      </h2>
      <div className="space-y-8">
        {mediaData.map((week, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleWeekClick(index)}
          >
            <h3 className="text-xl font-semibold mb-4">{week.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDisplay;
