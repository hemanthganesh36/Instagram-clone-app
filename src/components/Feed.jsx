import React from "react";
import Post from "./Post";

export default function Feed({ posts, onToggleLike, onToggleSave, onAddComment }) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onToggleLike={onToggleLike}
          onToggleSave={onToggleSave}
          onAddComment={onAddComment}
        />
      ))}
      <p className="text-center text-xs text-gray-400 pb-10">
        You're all caught up \u2728
      </p>
    </div>
  );
}
