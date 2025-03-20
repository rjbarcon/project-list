import { IError } from "../../interface";

export class ErrorModel implements IError {
  constructor(public statusCode: number, public message: string, public errors?: any[]) {}
}
