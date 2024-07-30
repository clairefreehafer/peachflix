import { useSearchParams } from "react-router-dom";
import { SearchResults } from "../utils/types";
import Chevron from "../images/chevron.svg";
import "./Pagination.css";

type Props = {
  total: SearchResults["totalResults"];
};

export default function Pagination({ total }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("p") as string);
  const numberOfPages = [...new Array(Math.ceil(parseInt(total) / 10))];

  function handleClick(nextPage: number) {
    setSearchParams((prevParams) => {
      prevParams.set("p", nextPage.toString());
      return prevParams;
    });
  }

  return (
    <div className="pagination">
      <div className="buttons">
        <button
          type="button"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage <= 1}
          className="button"
        >
          <img
            src={Chevron}
            alt="Previous page."
            className="chevron previous"
          />
        </button>

        {numberOfPages.map((_, idx) => (
          <button
            onClick={() => handleClick(idx + 1)}
            className={`button ${currentPage === idx + 1 ? "current" : ""}`}
            disabled={currentPage === idx + 1}
            key={idx}
          >
            {idx + 1}
          </button>
        ))}

        <button
          type="button"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage >= numberOfPages.length}
          className="button"
        >
          <img src={Chevron} alt="Next page." className="chevron" />
        </button>
      </div>

      <p>
        {currentPage === numberOfPages.length ? total : 10 * currentPage} of{" "}
        {total} results
      </p>
    </div>
  );
}
