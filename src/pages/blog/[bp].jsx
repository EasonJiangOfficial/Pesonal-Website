import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export default function BlogPostPage() {
const router = useRouter();
const { title,id,postedDate,content } = router.query;

return(
    <div className="container mx-auto mt-28 p-4 w-2/3" id={id}>
      <h1 className="flex text-6xl font-header items-center mb-4 gap-4">{title}</h1>
      <div className="flex gap-2 items-center">
              <Image
                src="/images/profile.jpeg"
                width={25}
                height={25}
                alt="Picture of Eason Jiang"
                className="rounded-full"
              />
              <p className="text-sm text-gray-400 font-body"> By Eason on {postedDate} </p>
            </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg font-body break-words">{content}</p>
      </div>
    </div>
)
}
