"use client";

import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

import { ProjectAPIService } from "@/library/services";
import { IProject } from "@/library/interface";

import {
  ProjectSearch,
  ProjectCard,
  DefaultHeader,
  Login,
} from "@/library/components";

export const ProjectMain = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const [projectList, setProjectList] = useState<IProject[]>([]);
  const [isProjectLoading, setIsProjectLoading] = useState(false);
  const [projectError, setProjectError] = useState("");

  // TODO: Remove this soon; automatic redirect user for now
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/api/auth/login");
    }
  }, [isLoading, user, router]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async (query?: string, filterBy?: "id" | "name") => {
    setIsProjectLoading(true);
    setProjectError("");

    try {
      const service = new ProjectAPIService();
      const list = await service.getProjectList(query, filterBy);
      setProjectList(list);
    } catch (err: any) {
      setProjectError(err.message || "Failed to fetch projects");
    } finally {
      setIsProjectLoading(false);
    }
  };

  const handleSearch = (query: string, filterBy: "id" | "name") => {
    fetchProjects(query, filterBy);
  };

  const handleAddProject = () => {
    console.log("Add project clicked!");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <SyncLoader size={12} />
      </div>
    );
  }

  return (
    <main>
      {user ? (
        <div>
          <DefaultHeader />

          <div className="p-4">
            <ProjectSearch
              onSearch={handleSearch}
              onAddProject={handleAddProject}
            />

            <div className="mx-auto max-w-5xl">
              <div className="flex items-center justify-center">
                {isProjectLoading && <SyncLoader size={12} />}
                {projectError && <p className="text-red-500">{projectError}</p>}
              </div>
            </div>

            <ProjectCard projectList={projectList} />
          </div>
        </div>
      ) : null}
    </main>
  );

  /* TODO: Put a proper login landing page */
  // return (
  //   <main>
  //     {user ? (
  //       <div>
  //         <DefaultHeader />

  //         <div className="p-4">
  //           <ProjectSearch
  //             onSearch={handleSearch}
  //             onAddProject={handleAddProject}
  //           />

  //           <div className="mx-auto max-w-5xl">
  //             <div className="flex items-center justify-center">
  //               {isProjectLoading && <SyncLoader size={12} />}
  //               {projectError && <p className="text-red-500">{projectError}</p>}
  //             </div>
  //           </div>

  //           <ProjectCard projectList={projectList} />
  //         </div>
  //       </div>
  //     ) : (
  //       <div className="flex items-center justify-center">
  //         <Login />
  //       </div>
  //     )}
  //   </main>
  // );
};
