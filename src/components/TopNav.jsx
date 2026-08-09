import React, { useState } from "react";
import { Home, Search, PlusSquare, Compass, Film, User } from "lucide-react";
import IconButton from "./IconButton";

export default function TopNav() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-[935px] mx-auto flex items-center justify-between px-4 py-3">
        <h1
          className="text-2xl text-gray-900 select-none"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Instagram
        </h1>

        <div className="hidden sm:flex items-center bg-gray-50 rounded-lg px-3 py-1.5 w-64 border border-transparent focus-within:border-gray-300">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="bg-transparent text-sm outline-none w-full placeholder:text-gray-400"
          />
        </div>

        <nav className="flex items-center gap-5 text-gray-900">
          <IconButton label="Home">
            <Home size={24} fill="currentColor" />
          </IconButton>
          <IconButton label="Explore">
            <Compass size={24} />
          </IconButton>
          <IconButton label="Reels">
            <Film size={24} />
          </IconButton>
          <IconButton label="Create">
            <PlusSquare size={24} />
          </IconButton>
          <IconButton label="Profile">
            <User size={24} />
          </IconButton>
        </nav>
      </div>
    </header>
  );
}
