import { IProject } from "../../interface";

export class ProjectModel implements IProject {
  constructor(public id?: number | null, name?: string | null, description?: string | null) {}
}
