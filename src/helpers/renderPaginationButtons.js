import { useContext } from "react";
import styles from "./renderPaginationButtons.module.css";
import GlobalContext from "../context/GlobalContext";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function RenderPaginationButtons() {
  const { currentSearchPage, setCurrentSearchPage, searchArticles } =
    useContext(GlobalContext);
  const articlesPerPage = 5;
  const totalPages = Math.ceil(searchArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentSearchPage(pageNumber);
  };

  const createPageButton = (pageNumber) => {
    return (
      <button
        key={pageNumber}
        className={
          pageNumber === currentSearchPage ? styles.activeSearchPage : ""
        }
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const buttons = [];
  const maxButtons = 7;

  buttons.push(
    <button
      key="prev"
      onClick={() => handlePageChange(currentSearchPage - 1)}
      disabled={currentSearchPage === 1}
    >
      <MdArrowBackIosNew className={styles.arrowIcon} />
    </button>
  );

  if (totalPages <= maxButtons) {
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(createPageButton(i));
    }
  } else {
    buttons.push(createPageButton(1));

    let startPage, endPage;
    if (currentSearchPage <= 4) {
      startPage = 2;
      endPage = 7;
    } else if (currentSearchPage > totalPages - 4) {
      startPage = totalPages - 6;
      endPage = totalPages - 1;
    } else {
      startPage = currentSearchPage - 2;
      endPage = currentSearchPage + 2;
    }

    if (startPage > 2) {
      buttons.push(<span key="dots1">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(createPageButton(i));
    }

    if (endPage < totalPages - 1) {
      buttons.push(<span key="dots2">...</span>);
    }

    buttons.push(createPageButton(totalPages));
  }
  buttons.push(
    <button
      key="next"
      onClick={() => handlePageChange(currentSearchPage + 1)}
      disabled={currentSearchPage === totalPages}
    >
      <MdArrowForwardIos className={styles.arrowIcon} />
    </button>
  );

  return buttons;
}

export default RenderPaginationButtons;
