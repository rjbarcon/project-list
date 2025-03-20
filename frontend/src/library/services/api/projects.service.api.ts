import { IProject } from "@/library/interface";

export class ProjectAPIService {
  public async getProjectList(
    query?: string,
    filterBy?: string,
  ): Promise<IProject[]> {
    let url = "/api/proxy/projects";

    if (query && filterBy) {
      const searchParams = new URLSearchParams({ [filterBy]: query });
      url += `?${searchParams.toString()}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error! Failed to fetch projects from proxy");
    }

    return await response.json();
  }
}
