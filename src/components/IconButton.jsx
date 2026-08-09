import React from "react";

export default function IconButton({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="hover:opacity-60 transition active:scale-90 duration-100"
    >
      {children}
    </button>
  );
}
