"use client";
import { cohort2Data } from "@/app/assets/data";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const WeekDetail = ({ params }) => {
  const weekNum = params.weekNum;
  const [weekData, setWeekData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const selectedWeek = cohort2Data[parseInt(weekNum)];
    setWeekData(selectedWeek);
  }, [weekNum]);

  const handleMediaClick = (media) => {
    if (media.type === "document") {
      window.open(media.url, "_blank");
    } else {
      router.push(`/lesson/${media.id}`);
    }
  };

  if (!weekData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        {weekData.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {weekData.media.map((media, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleMediaClick(media)}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {media.name}
            </h3>
            {/* Additional content, such as media description or icons, can be added here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekDetail;
