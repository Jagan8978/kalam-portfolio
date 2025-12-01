import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            border: '1px solid #334155',
            color: '#f1f5f9'
          }
        }}
      />

      {/* This is where Home and all nested routes will render */}
      <Outlet />
    </div>
  );
}
