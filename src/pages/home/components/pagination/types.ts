export interface IPage {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}
