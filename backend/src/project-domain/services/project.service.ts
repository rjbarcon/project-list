export class ProjectService {
  constructor() {}

  public async getProjectList() {
    const data = [
      { id: 1, name: "Project Alpha", description: "A React project." },
      { id: 2, name: "Project Beta", description: "A Node.js project." },
    ];

    return data;
  }
}

// TODO: To be replaced by tsyringe (for proper dependency injection)
export const projectService = new ProjectService();
