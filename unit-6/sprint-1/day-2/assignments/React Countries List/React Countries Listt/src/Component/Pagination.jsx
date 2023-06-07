import { useEffect, useState } from "react";
function Pagination({ setpageno }) {
  // const[states,setsates]=useState();
  const [page, setpage] = useState(1); 
  setpageno(page);

  const changepage = (vale) => {
    setpage(page + vale);
  };

  const prev = (
    <button
      data-testid="prev-page"
      disabled={page === 1}
      onClick={() => {
        changepage(-1);
      }}
    >
      Prev
    </button>
  );

  const currentPage = <button data-testid="current-page">{page}</button>;

  const next = (
    <button
      data-testid="next-page"
      disabled={page === 30}
      onClick={() => {
        changepage(+1);
      }}
    >
      Next
    </button>
  );

  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">10</b>
      </div>
    </div>
  );
}

export default Pagination;
