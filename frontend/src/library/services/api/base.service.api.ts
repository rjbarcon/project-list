export class BaseAPIService {
  private endpoint?: string | null;

  constructor(public path: string) {
    this.endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  }

  public async getList<T>(
    params?: Record<string, string> | null,
  ): Promise<T[]> {
    if (!this.endpoint) throw new Error("Error! API endpoint not found in env");

    const url = new URL(`${this.endpoint}/api/${this.path}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          url.searchParams.set(key, value);
        }
      });
    }

    const response = await fetch(url.toString(), { method: "GET" });

    if (!response.ok) {
      throw new Error("Error! Failed to fetch api endpoint");
    }

    const data = await response.json();
    return data;
  }
}
