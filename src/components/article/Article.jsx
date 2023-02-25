import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title, art }) => {
  return (
    <div className="gpt3__article-container">
      <div className="gpt3__article-container_img">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__article-container_text">
        <div>
          <p className="gpt3__article_p">{date}</p>
          <h3 className="gpt3__article_container-title">{title}</h3>
        </div>
        <p className="gpt3__article_p">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
