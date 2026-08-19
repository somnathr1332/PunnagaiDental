import React from 'react';

// Reusable large white tooth icon component
// The SVG path matches the current logo tooth shape
export default function BigToothIcon() {
  return (
    <svg className="big-tooth-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 8.5c0-1.8-1.5-3.5-3.5-4C14.2 4.2 13 5 12 5s-2.2-.8-3.5-.5C6.5 5 5 6.7 5 8.5c0 3 .5 5 1 6.5.5 1.5 1.5 3 2 4.5.3 1 1 2.5 1.5 2.5.8 0 1-1.5 1.5-3 .5 0 .8.5 1 .5s.5-.5 1-.5c.5 1.5.7 3 1.5 3 .5 0 1.2-1.5 1.5-2.5.5-1.5 1.5-3 2-4.5.5-1.5 1-3.5 1-6.5z" />
    </svg>
  );
}
