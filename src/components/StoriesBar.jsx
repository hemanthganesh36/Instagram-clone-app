import React, { useState } from "react";
import StoryBubble from "./StoryBubble";
import StoryViewer from "./StoryViewer";
import { STORIES } from "../data/mockData";

export default function StoriesBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-white border border-gray-200 rounded-md px-4 py-4 mb-6 max-w-[470px] mx-auto">
      <div className="flex gap-4 overflow-x-auto scrollbar-none">
        {STORIES.map((s, i) => (
          <StoryBubble key={s.id} story={s} onClick={() => setActiveIndex(i)} />
        ))}
      </div>

      {activeIndex !== null && (
        <StoryViewer
          stories={STORIES}
          startIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  );
}
