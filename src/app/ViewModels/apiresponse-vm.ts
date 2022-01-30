export interface APIResponseVM {
  success: boolean,
  data: any,
  messages: string[],
  pageNo?: number,
  totalPages?:number,
  itemsPerPage?:number
}
