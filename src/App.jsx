import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3 } from "./assets";
import share from "./assets/icons/share.svg";
import Paginations from "./components/Paginations";
import {
  handleNews,
  handleAuthor,
  handleMonth,
  handleDate,
} from "./utils/formula";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    setCurrentPage(savedPage ? parseInt(savedPage) : 1);
  }, [localStorage.getItem("currentPage")]);

  const handleCurrentImage = () => {
    if (currentPage === 1) return Image1;
    if (currentPage === 2) return Image2;
    if (currentPage === 3) return Image3;
  };

  const currentNews = handleNews(currentPage);
  const currentAuthor = handleAuthor(currentNews);
  const month = handleMonth(currentNews);
  const date = handleDate(currentNews);

  return (
    <div id="app">
      <div className="wrapper">
        <div className="image-wrapper">
          <div className="image-con">
            <img src={handleCurrentImage()} alt="no image" loading="lazy" />
          </div>
          <div>
            <div className="date">
              <span className="date">{date}</span>
              <span className="month">{month}</span>
            </div>
            <div className="share">
              <img src={share} />
              SHARE
            </div>
          </div>
        </div>

        <hr />

        <div className="details">
          <p className="author">
            <div>{currentAuthor.name[0]}</div>
            {currentAuthor.name}
          </p>
          <h1 className="title">{currentNews.title}</h1>
          <h3 className="sub-title">{currentNews.body}</h3>
          <p className="read-more">READ ARTICLE</p>
        </div>

        <Paginations />
      </div>
    </div>
  );
}

export default App;
