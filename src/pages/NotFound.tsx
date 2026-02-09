import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-soft text-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center flex flex-col gap-6">
        <h1 className="text-7xl sm:text-8xl font-extrabold text-primary">
          404
        </h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Page not found</h2>
          <p className="text-sm sm:text-base text-white/70">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <Link
            to="/"
            className="rounded-full bg-linear-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Go back home
          </Link>

          <Link
            to="mailto:support@zenithdevtech.name.ng"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:border-white/40 transition"
          >
            Contact support
          </Link>
        </div>

        <p className="mt-6 text-xs text-white/50">
          If you believe this is an error, please reach out and we’ll fix it.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
