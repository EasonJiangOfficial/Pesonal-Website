import React from "react";
import BlogList from "./blogList";

const BlogSection = ({blogPosts}) => {
  return(
    <div className="items-center justify-center w-full min-h-screen flex flex-col min-h-screen text-white">
      <h1 className="font-header text-7xl sm:text-7xl md:text-7xl lg:text-8xl" data-aos="fade-up">Blog</h1>
      <BlogList blogPosts={blogPosts}/>
    </div>
  )
}

export default BlogSection;
