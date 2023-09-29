export type PaginatedResource<T> = {
  data: Array<T>,
  pagination: {
    page: number,
    pages: number,
    total: number,
  }
}

export function withPagination<T>(resource: T[], page: number, pageSize: number, total: number): PaginatedResource<T> {
  return ({
    data: resource,
    pagination: {
      page: page,
      pages: Math.ceil(total/pageSize),
      total: total
    }
  }) 
}