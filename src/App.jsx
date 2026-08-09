import React, { useState } from "react";
import TopNav from "./components/TopNav";
import StoriesBar from "./components/StoriesBar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import { INITIAL_POSTS } from "./data/mockData";

export default function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const toggleLike = (id) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );

  const toggleSave = (id) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p))
    );

  const addComment = (id, text) =>
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              comments: [
                ...p.comments,
                { id: `c-${Date.now()}`, username: "you", text },
              ],
            }
          : p
      )
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <main className="max-w-[935px] mx-auto flex">
        <div className="flex-1 pt-6 px-2 sm:px-4">
          <StoriesBar />
          <Feed
            posts={posts}
            onToggleLike={toggleLike}
            onToggleSave={toggleSave}
            onAddComment={addComment}
          />
        </div>
        <RightSidebar />
      </main>
    </div>
  );
}
