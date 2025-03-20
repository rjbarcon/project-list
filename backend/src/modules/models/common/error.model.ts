import { IError } from "../../interface";

export class ErrorModel implements IError {
  constructor(public code: number, public message: string, public errors?: any[]) {}
}
