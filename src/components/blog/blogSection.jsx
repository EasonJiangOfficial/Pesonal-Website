import React from "react";
import BlogList from "./blogList";

const BlogSection = ({blogPosts}) => {
  return(
    <div className="items-center justify-center w-full m-40  flex flex-col text-white">
      <h1 className="font-header text-7xl sm:text-7xl md:text-7xl lg:text-8xl" data-aos="fade-up">Blog</h1>
      <BlogList blogPosts={blogPosts}/>
    </div>
  )
}

export default BlogSection;
