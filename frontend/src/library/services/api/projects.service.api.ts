import { IProject } from "@/library/interface";
import { BaseAPIService } from "./base.service.api";

export class ProjectAPIService {
  public async getProjectList(): Promise<IProject[]> {
    const api = new BaseAPIService("projects");

    const dataset = await api.getList<IProject>();

    return dataset;
  }
}
