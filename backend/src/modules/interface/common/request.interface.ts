export interface IRequestQuery {
  since?: number | null;
  limit?: number | null;

  orderBy?: string | null;
  sortBy?: string | null;
}
