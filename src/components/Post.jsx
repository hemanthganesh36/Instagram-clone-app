import React, { useRef, useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import IconButton from "./IconButton";
import { formatLikes } from "../utils/formatLikes";

export default function Post({ post, onToggleLike, onToggleSave, onAddComment }) {
  const [commentDraft, setCommentDraft] = useState("");
  const [showHeart, setShowHeart] = useState(false);
  const lastTap = useRef(0);

  const handleDoubleTap = () => {
    if (!post.liked) onToggleLike(post.id);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 700);
  };

  const handleImageClick = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      handleDoubleTap();
    }
    lastTap.current = now;
  };

  const submitComment = (e) => {
    e.preventDefault();
    const text = commentDraft.trim();
    if (!text) return;
    onAddComment(post.id, text);
    setCommentDraft("");
  };

  return (
    <article className="bg-white border border-gray-200 rounded-md w-full max-w-[470px] mx-auto mb-6">
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm leading-tight">
            <p className="font-semibold text-gray-900">{post.username}</p>
            {post.location && (
              <p className="text-gray-500 text-xs">{post.location}</p>
            )}
          </div>
        </div>
        <MoreHorizontal size={20} className="text-gray-700" />
      </div>

      <div className="relative select-none cursor-pointer" onClick={handleImageClick}>
        <img
          src={post.image}
          alt="post"
          className="w-full aspect-square object-cover"
          draggable={false}
        />
        {showHeart && (
          <Heart
            size={90}
            className="absolute inset-0 m-auto text-white drop-shadow-lg animate-ping-once"
            fill="white"
          />
        )}
      </div>

      <div className="flex items-center justify-between px-3 pt-3">
        <div className="flex items-center gap-4">
          <IconButton label="Like" onClick={() => onToggleLike(post.id)}>
            <Heart
              size={24}
              className={post.liked ? "text-red-500" : "text-gray-900"}
              fill={post.liked ? "currentColor" : "none"}
            />
          </IconButton>
          <IconButton label="Comment">
            <MessageCircle size={24} className="text-gray-900" />
          </IconButton>
          <IconButton label="Share">
            <Send size={24} className="text-gray-900" />
          </IconButton>
        </div>
        <IconButton label="Save" onClick={() => onToggleSave(post.id)}>
          <Bookmark
            size={24}
            className="text-gray-900"
            fill={post.saved ? "currentColor" : "none"}
          />
        </IconButton>
      </div>

      <div className="px-3 pt-2">
        <p className="text-sm font-semibold text-gray-900">
          {formatLikes(post.likes + (post.liked ? 1 : 0))} likes
        </p>
      </div>

      <div className="px-3 pt-1 text-sm text-gray-900">
        <span className="font-semibold mr-1">{post.username}</span>
        {post.caption}
      </div>

      {post.comments.length > 0 && (
        <div className="px-3 pt-1 space-y-0.5">
          {post.comments.map((c) => (
            <p key={c.id} className="text-sm text-gray-900">
              <span className="font-semibold mr-1">{c.username}</span>
              {c.text}
            </p>
          ))}
        </div>
      )}

      <p className="px-3 pt-1 text-[11px] uppercase tracking-wide text-gray-400">
        {post.timeAgo} ago
      </p>

      <form
        onSubmit={submitComment}
        className="flex items-center gap-2 px-3 py-3 border-t border-gray-100 mt-2"
      >
        <input
          value={commentDraft}
          onChange={(e) => setCommentDraft(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 text-sm outline-none placeholder:text-gray-400"
        />
        {commentDraft.trim() && (
          <button
            type="submit"
            className="text-sm font-semibold text-sky-500 hover:text-sky-700"
          >
            Post
          </button>
        )}
      </form>
    </article>
  );
}
