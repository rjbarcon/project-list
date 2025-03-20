/* This is a generic response model */

import { IProject, IResponse } from "../../interface";

export class ResponseModel implements IResponse {
  public data?: any | null;
  public message?: string | null;
  public statusCode?: number | null;

  constructor(data: IResponse) {
    this.data = data?.data || null;
    this.message = data?.message || null;
    this.statusCode = data?.statusCode || null;
  }
}
