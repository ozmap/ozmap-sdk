export default interface Pagination<T> {
  total: number;
  count: number;
  start: number;
  limit: number;
  rows: Array<T>;
  hasNextPage: boolean;
  nextUrl?: string;
}
