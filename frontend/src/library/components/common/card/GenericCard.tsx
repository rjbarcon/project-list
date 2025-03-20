"use client";

import React from "react";

interface BaseItem {
  id: number;
  name: string;
  description: string;
}

interface GenericCardProps<T extends BaseItem> {
  item: T;
}

export function GenericCard<T extends BaseItem>({ item }: GenericCardProps<T>) {
  const { id, name, description } = item;

  return (
    <div
      className="rounded-lg shadow p-4 border-b-4 border-amber-700 hover:shadow-lg
        transition-shadow duration-200 bg-white text-gray-800 dark:bg-gray-800
        dark:text-gray-100"
    >
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>{description}</p>
    </div>
  );
}
