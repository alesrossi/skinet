import { Product } from './product';

export interface Pagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Product[];
}

export class Pagination implements Pagination {
  count: number = 0;
  data: Product[] = [];
  pageIndex: number = 0;
  pageSize: number = 0;
}
