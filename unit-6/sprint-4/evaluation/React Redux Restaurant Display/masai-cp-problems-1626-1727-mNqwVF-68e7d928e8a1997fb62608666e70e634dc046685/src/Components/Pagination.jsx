import React from "react";

const Pagination = ({ TotalPages, currentPage, setcurrentPage }) => {
  const arr = new Array(TotalPages).fill(0);
  return (
    <div className="pagination_wrapper">
      {arr.map((el, i) => (
        <button
          key={i + 1}
          disabled={i + 1 === currentPage}
          onClick={() => setcurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
