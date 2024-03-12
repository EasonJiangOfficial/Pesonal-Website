import React from "react";



const BlogSection = (blogPosts) => {
  {
    blogPosts.map((blogpost) => {
      return(
        <div className="post-contianer">
          <div className="post-title">{blogpost.title}</div>
          <div className="post-date">{blogpost.date}</div>
          <div className="post-content">{blogpost.content}</div>
        </div>
      );
    });
  }
};

export default BlogSection;
