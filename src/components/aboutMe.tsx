import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className=" items-center justify-center w-full min-h-screen flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row gap-10">
      <div className="w-3/6 gap-2 flex flex-col">
        <h1
          className="font-header text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-white"
          data-aos="fade-up"
        >
          About Me
        </h1>
        <p className="text-2 font-body text-white" data-aos="fade-right">
          Im a 16-year-old high school junior from Missouri. In my free time, I
          like to learn new skills like coding, video editing, playing musical
          instruments, UI design, cooking, etc.; read books about personal
          finance/business; cook food; and watch anime. I'm working on PearPrep,
          an all in 1 AP prep platform that will help students prep more
          efficiently for AP.
        </p>
      </div>
      <div className="w-3/6 flex justify-center" data-aos="fade-left">
        <Image
          src="/images/Me.jpeg"
          width={500}
          height={500}
          alt="Picture of Eason Jiang"
        />
      </div>
    </div>
  );
}
