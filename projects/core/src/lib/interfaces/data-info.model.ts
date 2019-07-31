export interface DataInfo {
  url: string;
  data?: any;
}

export interface DataGridParams {
  pageIndex?: number;
  pageCount?: number;
  sort?: { field: string; order: string }[];
  skip?: number;
  filter?: FilterItems;
}

export interface FilterItems {
  condition: string;
  filters: (FilterItem | FilterItems)[];
}

export interface FilterItem {
  field?: string;
  operator?: any;
  value?: any;
}
