import React from "react";

export const WorkInProgress = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="space-y-4 text-center">
        <div className="relative inline-flex h-20 w-20 items-center justify-center">
          <svg
            className="h-20 w-20 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0a12 12 0 0112 12 12 12 0 01-12 12A12 12 0 010 12 12 12 0 0112 0zm0 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M11 6h2v6h-2zm0 8h2v2h-2z"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-gray-700">
          We&apos;re working on something amazing!
        </h1>
        <p className="mx-auto max-w-lg text-gray-500">
          This page is currently under construction. Stay tuned for something
          awesome. Thank you for your patience!
        </p>
      </div>
    </div>
  );
};
