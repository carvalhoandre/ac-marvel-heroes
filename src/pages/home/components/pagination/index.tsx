import IComponent from "src/@types";

import {
  PaginationButton,
  PaginationWrapper,
  PaginationArrowButton,
} from "./styles";
import { IPage } from "./types";
import LeftArrowIcon from "@assets/icons/left-arrow.svg";
import RightArrowIcon from "@assets/icons/right-arrow.svg";

const Pagination: IComponent<IPage> = ({
  testId = "pagination-component",
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const generatePagesToShow = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          totalPages
        );
      }
    }

    return pages;
  };

  const pagesToShow = generatePagesToShow();

  return (
    <PaginationWrapper data-testId={`${testId}-container`}>
      <PaginationArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        data-testid={`${testId}-prev-button`}
      >
        <img src={LeftArrowIcon} alt="Previous Page" />
      </PaginationArrowButton>

      {pagesToShow.map((page, index) => (
        <PaginationButton
          key={index}
          onClick={() => handlePageChange(page)}
          isActive={currentPage === page}
          data-testid={`page-button-${page}`}
        >
          {page === 1 ||
          page === totalPages ||
          Math.abs(currentPage - page) <= 1
            ? page
            : "..."}
        </PaginationButton>
      ))}

      <PaginationArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        data-testid={`${testId}-next-button`}
      >
        <img src={RightArrowIcon} alt="Next Page" />
      </PaginationArrowButton>
    </PaginationWrapper>
  );
};

export { Pagination };
