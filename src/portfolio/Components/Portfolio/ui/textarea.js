import React from 'react';

export default function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full px-3 py-2 rounded-md border border-slate-700 bg-transparent text-white focus:outline-none"
    />
  );
}
