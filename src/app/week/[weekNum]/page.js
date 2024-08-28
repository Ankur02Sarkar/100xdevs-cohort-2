"use client";
import { cohort2Data } from "@/app/assets/data";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RestrictedPage from "@/components/RestrictedPage";
import { useAuth } from "@/hooks/useAuth";
import { useSession } from "next-auth/react";

const WeekDetail = ({ params }) => {
  const weekNum = params.weekNum;
  const [weekData, setWeekData] = useState(null);
  const [watchedMedia, setWatchedMedia] = useState({});
  const router = useRouter();
  const { isAdmin, userId } = useAuth();

  useEffect(() => {
    const selectedWeek = cohort2Data[parseInt(weekNum)];
    setWeekData(selectedWeek);

    // Fetch watched media from API route
    const fetchWatchedMedia = async () => {
      try {
        const response = await fetch(`/api/watchedMedia?userId=${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch watched media");
        }
        const data = await response.json();
        setWatchedMedia(data);
      } catch (error) {
        console.error("Error fetching watched media:", error);
      }
    };

    if (isAdmin) {
      fetchWatchedMedia();
    }
  }, [weekNum, isAdmin]);

  const handleMediaClick = async (media) => {
    if (media.type === "document") {
      window.open(media.url, "_blank");
    } else {
      router.push(`/lesson/${media.id}`);
    }

    // Update watched status via API route
    try {
      const response = await fetch("/api/watchedMedia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          mediaId: media.id,
          watched: true,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update watched media");
      }
      setWatchedMedia((prev) => ({ ...prev, [media.id]: true }));
    } catch (error) {
      console.error("Error updating watched media:", error);
    }
  };

  const handleCheckboxClick = async (e, mediaId) => {
    e.stopPropagation();
    const newWatchedStatus = !watchedMedia[mediaId];

    try {
      const response = await fetch("/api/watchedMedia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          mediaId,
          watched: newWatchedStatus,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update watched media");
      }
      setWatchedMedia((prev) => ({ ...prev, [mediaId]: newWatchedStatus }));
    } catch (error) {
      console.error("Error updating watched media:", error);
    }
  };

  if (!weekData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      {isAdmin ? (
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
