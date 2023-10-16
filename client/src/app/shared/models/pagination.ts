import { Product } from './product';

export interface Pagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Product[];
}

export class Pagination implements Pagination {
  count: number;
  data: Product[] = [];
  pageIndex: number;
  pageSize: number;
}
