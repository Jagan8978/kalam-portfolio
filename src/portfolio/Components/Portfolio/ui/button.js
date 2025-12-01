import React from 'react';

export default function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}
