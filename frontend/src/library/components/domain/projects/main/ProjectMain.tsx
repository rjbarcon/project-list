"use client";

import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";

import { ProjectSearch, ProjectCard } from "@/library/components";
import { ProjectAPIService } from "@/library/services";
import { IProject } from "@/library/interface";

export const ProjectMain = () => {
  const [projectList, setProjectList] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async (query?: string, filterBy?: "id" | "name") => {
    setIsLoading(true);
    setError("");

    try {
      const service = new ProjectAPIService();
      const list = await service.getProjectList(query, filterBy);
      setProjectList(list);
    } catch (err: any) {
      setError(err.message || "Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string, filterBy: "id" | "name") => {
    fetchProjects(query, filterBy);
  };

  const handleAddProject = () => {
    console.log("Add project clicked!");
  };

  return (
    <main className="p-4">
      <ProjectSearch onSearch={handleSearch} onAddProject={handleAddProject} />

      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-center">
          {isLoading && <SyncLoader size={12} />}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      <ProjectCard projectList={projectList} />
    </main>
  );
};
