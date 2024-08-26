"use client";
import { cohort2Data } from "@/app/assets/data";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const CourseDisplay = ({ params }) => {
  const cohortId = params.id;
  const [mediaData, setMediaData] = useState(cohort2Data);

  const filteredMedia = mediaData
    ?.filter((week) => week.media.some((media) => media.cohort === cohortId))
    ?.flatMap((week) =>
      week.media.filter((media) => media.cohort === cohortId)
    );
  console.log("filteredMedia : ", filteredMedia);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Course Materials for Cohort {cohortId}
      </h2>
      <div className="space-y-8">
        {filteredMedia.map((media, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{media.name}</h3>
            {media.type === "video" ? (
              <ReactPlayer
                url={media.url}
                controls
                width="100%"
                height="auto"
                className="rounded-md overflow-hidden"
              />
            ) : (
              <iframe
                src={media.url}
                title={media.name}
                className="w-full h-96 rounded-md border border-gray-300"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDisplay;
