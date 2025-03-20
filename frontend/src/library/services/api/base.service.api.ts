export class BaseAPIService {
  private endpoint?: string | null;

  constructor(public path: string) {
    this.endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  }

  public async getList<T>(): Promise<T[]> {
    if (!this.endpoint) throw new Error("Error! API endpoint not found in env");

    const response = await fetch(`${this.endpoint}/api/${this.path}`, {});

    if (!response.ok) throw new Error("Error! Failed to fetch api endpoint");
    const data = await response.json();

    return data;
  }
}
