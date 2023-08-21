import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="items-center justify-center w-full min-h-screen flex flex-col-reverse lg:flex-row gap-10">
      <div className="w-full sm:w-full md:w-3/6 lg:w-3/6 gap-2 flex flex-col">
        <h1
          className="font-header text-6xl md:text-7xl lg:text-8xl text-center lg:text-left text-white"
          data-aos="fade-up"
        >
          About Me
        </h1>
        <p className="text-base font-body text-white text-center lg:text-left lg:text-lg" data-aos="fade-right">

          Im a 16-year-old high school junior from Missouri. In my free time, I
          like to learn new skills like coding, video editing, playing musical
          instruments, UI design, cooking, etc.; read books about personal
          finance/business; cook food; and watch anime. I'm currently working on PearPrep,
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
