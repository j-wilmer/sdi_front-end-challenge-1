import React, { useState, useEffect } from "react";
import prev from "../assets/icons/previous.svg";
import next from "../assets/icons/next.svg";
import { updateStorage } from "../utils/formula";

import { news } from "../utils/data";

function Paginations() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    setCurrentPage(savedPage ? parseInt(savedPage) : 1);
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) {
      const updatedPage = currentPage - 1;
      setCurrentPage(updatedPage);
      updateStorage(updatedPage);
    }
  };
  const handleNext = () => {
    if (currentPage < 3) {
      const updatedPage = currentPage + 1;
      setCurrentPage(updatedPage);
      updateStorage(updatedPage);
    }
  };
  const handleSetPage = (id) => {
    const updatedPage = id;
    setCurrentPage(updatedPage);
    updateStorage(updatedPage);
  };

  return (
    <div className="pagination">
      <div
        className={currentPage === 1 ? "disabled-btn" : "btn"}
        onClick={handlePrev}
      >
        <img src={prev} />
      </div>

      {news.map((news) => (
        <div
          className={currentPage === news.id ? "active-btn" : "btn"}
          onClick={() => handleSetPage(news.id)}
        >
          {news.id}
        </div>
      ))}

      <div
        className={currentPage === 3 ? "disabled-btn" : "btn"}
        onClick={handleNext}
      >
        <img src={next} />
      </div>
    </div>
  );
}

export default Paginations;
