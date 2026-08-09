import React from "react";
import { SUGGESTIONS } from "../data/mockData";

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block w-[320px] pl-10 pt-6">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="you"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div className="text-sm">
          <p className="font-semibold text-gray-900">you</p>
          <p className="text-gray-500">Your profile</p>
        </div>
        <button className="ml-auto text-xs font-semibold text-sky-500 hover:text-sky-700">
          Switch
        </button>
      </div>

      <div className="flex items-center justify-between mt-6">
        <p className="text-sm font-semibold text-gray-400">Suggested for you</p>
        <button className="text-xs font-semibold text-gray-900">See All</button>
      </div>

      <div className="mt-3 space-y-3">
        {SUGGESTIONS.map((u) => (
          <div key={u.id} className="flex items-center gap-3">
            <img
              src={u.avatar}
              alt={u.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="text-xs leading-tight">
              <p className="font-semibold text-gray-900">{u.name}</p>
              <p className="text-gray-400">{u.sub}</p>
            </div>
            <button className="ml-auto text-xs font-semibold text-sky-500 hover:text-sky-700">
              Follow
            </button>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-gray-300 mt-8 leading-5">
        A React clone built for demo purposes \u00b7 No data leaves your browser
      </p>
    </aside>
  );
}
