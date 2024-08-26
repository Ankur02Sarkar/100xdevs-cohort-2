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
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {mediaItem.name}
      </h2>
      {mediaItem.type === "video" ? (
        <ReactPlayer
          url={mediaItem.url}
          controls
          width="100%"
          height="auto"
          className="rounded-md overflow-hidden"
        />
      ) : (
        <iframe
          src={mediaItem.url}
          title={mediaItem.name}
          className="w-full h-96 rounded-md border border-gray-300"
        />
      )}
    </div>
  );
};

export default MediaDetail;
