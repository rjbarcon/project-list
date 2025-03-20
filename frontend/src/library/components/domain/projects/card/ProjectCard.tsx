"use client";

import React from "react";
import { IProject } from "@/library/interface";

interface ProjectCardProps {
  projectList: IProject[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectList }) => {
  return (
    <div className="mx-auto mt-8 max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((item) => (
          <div key={item.id}>
            <div
              className="rounded-lg shadow p-4 border-b-4 border-amber-700 hover:shadow-lg
                transition-shadow duration-200 bg-white text-gray-800 dark:bg-gray-800
                dark:text-gray-100"
            >
              <div className="mb-3 flex justify-between">
                <span className="text-xl font-bold mb-2">{item.name}</span>
                <span
                  className="flex items-center justify-center w-5 h-5 bg-teal-700 text-white rounded-full
                    dark:bg-amber-600 dark:text-black"
                >
                  {item.id}
                </span>
              </div>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
