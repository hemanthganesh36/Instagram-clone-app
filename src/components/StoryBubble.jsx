import React from "react";

export default function StoryBubble({ story, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 shrink-0 w-16"
    >
      <div
        className={`p-[2px] rounded-full ${
          story.isYou
            ? "bg-gray-200"
            : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
        }`}
      >
        <div className="bg-white p-[2px] rounded-full">
          <img
            src={story.avatar}
            alt={story.name}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs text-gray-700 truncate w-16 text-center">
        {story.isYou ? "Your story" : story.name}
      </span>
    </button>
  );
}
