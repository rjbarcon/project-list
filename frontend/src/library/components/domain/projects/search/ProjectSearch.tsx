"use client";

import React, { useState } from "react";

interface ProjectSearchProps {
  onSearch: (query: string, filterBy: "id" | "name") => void;
  onAddProject: () => void;
}

export const ProjectSearch = ({
  onSearch,
  onAddProject,
}: ProjectSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState<"id" | "name">("name");

  const handleSearch = () => {
    onSearch(searchQuery, filterBy);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex items-center gap-4 my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="Search..."
          className="border border-gray-300 rounded px-2 py-1 flex-1"
        />

        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value as "id" | "name")}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="name">Filter by Name</option>
          <option value="id">Filter by ID</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Search
        </button>

        {/* TODO: Backlog; create functionality to add items on list */}
        <button className="bg-gray-600 text-white px-3 py-1 rounded">
          + Add
        </button>

        {/* TODO: Backlog; create functionality to reset the list (original items) */}
        <button className="bg-gray-600 text-white px-3 py-1 rounded">
          - Reset
        </button>
      </div>
    </div>
  );
};
