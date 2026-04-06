import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        {/* Error Number */}
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </p>

        {/* Description */}
        <p className="text-gray-500 mt-2 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
