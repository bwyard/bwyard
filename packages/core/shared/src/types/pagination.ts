// ============================================================
// Pagination — standard cursor + offset patterns
// ============================================================

export type PaginationParams = {
  page: number;
  limit: number;
};

export type CursorParams = {
  cursor: string | null;
  limit: number;
};

export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type CursorResult<T> = {
  items: T[];
  nextCursor: string | null;
  hasNextPage: boolean;
};
