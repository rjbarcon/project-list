import { IRequestQuery } from "../common/request.interface";

export interface IProject {
  id?: number | null;
  name?: string | null;
  description?: string | null;
}

export interface IProjectGetListQuery extends IRequestQuery, IProject {}

const x: IProjectGetListQuery = {
  since: 0 || undefined
}