export class ProjectService {
  constructor() {}

  public async getProjectList(): Promise<any> {
    const data: any = [];

    return data;
  }
}

// TODO: To be replaced by tsyringe (for proper dependency injection)
export const projectService = new ProjectService();
