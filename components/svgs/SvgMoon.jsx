import React from "react";

export const SvgMoon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8 cursor-pointer"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 019 6.035c-2.894.887-5 3.61-5 6.832 0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853z"
        className="fill-sky-400/20"
      />
      <path
        d="M17.715 15.15l.95.316a1 1 0 00-1.445-1.185l.495.869zM9 6.035l.846.534a1 1 0 00-1.14-1.49L9 6.035zm8.221 8.246a5.47 5.47 0 01-2.72.718v2a7.47 7.47 0 003.71-.98l-.99-1.738zm-2.72.718A5.5 5.5 0 019 9.5H7a7.5 7.5 0 007.5 7.5v-2zM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 007 9.5h2zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99l-.586-1.91C5.397 6.094 3 9.201 3 12.867h2zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632z"
        className="fill-slate-200"
      />
      <path
        clipRule="evenodd"
        d="M17 3a1 1 0 011 1 2 2 0 002 2 1 1 0 110 2 2 2 0 00-2 2 1 1 0 11-2 0 2 2 0 00-2-2 1 1 0 110-2 2 2 0 002-2 1 1 0 011-1z"
        className="fill-slate-200"
      />
    </svg>
  );
};