import { IProject } from "@/library/interface";
import { BaseAPIService } from "./base.service.api";

export class ProjectAPIService {
  public async getProjectList(
    query?: string,
    filterBy?: string,
  ): Promise<IProject[]> {
    const api = new BaseAPIService("projects");

    const params = filterBy && query ? { [filterBy]: query } : null;

    const dataset = await api.getList<IProject>(params);

    return dataset;
  }
}
