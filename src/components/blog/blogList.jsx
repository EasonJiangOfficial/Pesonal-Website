import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogList({ blogPosts }) {
  return (
    <div className="mt-10 gap-12 place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {blogPosts.map((blogPost, index) => (
        <Link
        key={index}
        href={{
          pathname:`/blog/${blogPost.bp}`,
          query:{id:blogPost.id, title: blogPost.title, postedDate: blogPost.postedDate, content: blogPost.content} 
        }}
        className="w-full h-[500px] flex flex-col justify-between items-center"
        >
        <div
          key={index}
          className="hover:from-gradient-end-red hover:to-red-800 hover:-translate-y-4 hover:shadow-2xl hover:ease-in duration-200 rounded-[30px] bg-gradient-to-b from-gradient-start-red to-gradient-end-red p-10 w-full h-[500px] flex flex-col justify-between items-center text-white"
          data-aos="fade-right"
          data-aos-delay={`${index * 100}`}
        >
           
          <div className="flex flex-col w-full h-2/3 gap-5">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-header">
              {blogPost.title}
            </h1>
            <div className="flex gap-2 items-center">
              <Image
                src="/images/profile.jpeg"
                width={25}
                height={25}
                alt="Picture of Eason Jiang"
                className="rounded-full"
              />
              <p className="text-sm text-gray-300 font-body"> By Eason on {blogPost.postedDate} </p>
            </div>

            <p className="text-2 font-body break-words">
              {blogPost.content.slice(0, 700) + "..."}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}