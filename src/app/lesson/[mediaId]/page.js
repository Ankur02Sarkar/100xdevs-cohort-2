"use client";
import { cohort2Data } from "@/app/assets/data";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const MediaDetail = ({ params }) => {
  const mediaId = params.mediaId;
  const [mediaItem, setMediaItem] = useState(null);

  useEffect(() => {
    const media = cohort2Data
      ?.flatMap((week) => week.media)
      ?.find((media) => media.id === parseInt(mediaId));

    setMediaItem(media);
  }, [mediaId]);

  if (!mediaItem) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        {mediaItem.name}
      </h2>
      {mediaItem.type === "video" && (
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <ReactPlayer
            url={mediaItem.url}
            controls
            width="100%"
            height="100%"
            className="rounded-lg overflow-hidden"
          />
        </div>
      )}
    </div>
  );
};

export default MediaDetail;
