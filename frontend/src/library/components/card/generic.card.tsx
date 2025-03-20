"use client";

import React from "react";

export const GenericCard = ({ id, name, description }: { id: string | number; name: string; description: string }) => {
  return (
    <div className="rounded-lg shadow p-4 hover:shadow-lg transition-shadow duration-200 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>{description}</p>
    </div>
  );
};
