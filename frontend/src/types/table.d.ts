type TableColumn = {
  title: string;
  accessor?: string;
  customRow?: React.ReactNode;
};
type TablePagination = {
  totalRows: number;
  currentPageNumber: number;
  initialRowNumber: number;
  finalRowNumber: number;
  totalPages: number;
};
