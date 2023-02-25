import React from "react";
import "./blog.css";
import { Article } from "../../components";
import blog1_img from "../../assets/blog01.png";
import blog2_img from "../../assets/blog02.png";
import blog3_img from "../../assets/blog03.png";
import blog4_img from "../../assets/blog04.png";
import blog5_img from "../../assets/blog05.png";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-title">
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content_groupA">
          <Article
            imgUrl={blog1_img}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-content_groupB">
          <Article
            imgUrl={blog2_img}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />

          <Article
            imgUrl={blog3_img}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />

          <Article
            imgUrl={blog4_img}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />

          <Article
            imgUrl={blog5_img}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
