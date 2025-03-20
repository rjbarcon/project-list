"use client";

import React, { useEffect, useState } from "react";
import { GenericCard } from "@/library/components";
import { ProjectAPIService } from "@/library/services";
import { IProject } from "@/library/interface";

export const ProjectCard = ({ id, name, description }: IProject) => {
  const [projectList, setProjectList] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectAPIService = new ProjectAPIService();
      const list = await projectAPIService.getProjectList();
      setProjectList(list);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="mx-auto mt-8 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((item: any) => (
            <GenericCard key={item.id} id={item.id} name={item.name} description={item.description} />
          ))}
        </div>
      </div>
    </>
  );
};
