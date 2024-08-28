"use client";
import { cohort2Data } from "@/app/assets/data";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RestrictedPage from "@/components/RestrictedPage";
import { useAuth } from "@/hooks/useAuth";

const WeekDetail = ({ params }) => {
  const weekNum = params.weekNum;
  const [weekData, setWeekData] = useState(null);
  const [watchedMedia, setWatchedMedia] = useState({});
  const router = useRouter();
  const isAuthenticated = useAuth();

  useEffect(() => {
    const selectedWeek = cohort2Data[parseInt(weekNum)];
    setWeekData(selectedWeek);

    // Retrieve watched media from local storage
    const storedWatchedMedia = localStorage.getItem("watchedMedia");
    if (storedWatchedMedia) {
      setWatchedMedia(JSON.parse(storedWatchedMedia));
    }
  }, [weekNum]);

  const handleMediaClick = (media) => {
    if (media.type === "document") {
      window.open(media.url, "_blank");
    } else {
      router.push(`/lesson/${media.id}`);
    }

    // Check the box when clicking anywhere on the div
    const updatedWatchedMedia = { ...watchedMedia, [media.id]: true };
    setWatchedMedia(updatedWatchedMedia);
    localStorage.setItem("watchedMedia", JSON.stringify(updatedWatchedMedia));
  };

  const handleCheckboxClick = (e, mediaId) => {
    e.stopPropagation();
    const updatedWatchedMedia = { ...watchedMedia };
    updatedWatchedMedia[mediaId] = !updatedWatchedMedia[mediaId];
    setWatchedMedia(updatedWatchedMedia);

    // Store updated watched media in local storage
    localStorage.setItem("watchedMedia", JSON.stringify(updatedWatchedMedia));
  };

  if (!weekData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      {isAuthenticated ? (
        <>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            {weekData.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {weekData.media.map((media, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer relative"
                onClick={() => handleMediaClick(media)}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  {media.name}
                </h3>
                <input
                  type="checkbox"
                  className="absolute top-2 right-2"
                  checked={watchedMedia[media.id] || false}
                  onChange={(e) => handleCheckboxClick(e, media.id)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <RestrictedPage />
      )}
    </div>
  );
};

export default WeekDetail;
