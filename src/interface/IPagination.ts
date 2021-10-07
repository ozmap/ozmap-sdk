export default interface IPagination<T> {
  total: number;
  count: number;
  start: number;
  limit: number;
  rows: Array<T>;
}
