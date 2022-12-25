import { useEffect, useState } from "react";

const PaginationForSeries = ({ totalPages, setCurrentPage }) => {
  const pages = totalPages;
  const [currentButton, setCurrentButton] = useState(1);
  const numberOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div className="clearfix">
      <ul className="pagination">
        <li
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a href="#!" className="page-link">
          Önceki
          </a>
        </li>
        {numberOfPages.map((page, index) => {
          return (
            <li
              onClick={() => setCurrentButton(page)}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
              key={index}
            >
              <a href="#!" className="page-link">
                {page}
              </a>
            </li>
          );
        })}
        <li
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
            )
          }
          className={`${
            currentButton === numberOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a href="#!" className="page-link">
            Sonraki
          </a>
        </li>
      </ul>
    </div>
  );
};
export default PaginationForSeries;
