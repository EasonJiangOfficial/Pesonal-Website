import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex min-h-screen w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row">
      <div className="flex w-full flex-col gap-2 sm:w-full md:w-3/6 lg:w-3/6">
        <h1
          className="font-header text-center text-6xl text-white md:text-7xl lg:text-left lg:text-8xl"
          data-aos="fade-up"
        >
          About Me
        </h1>
        <p
          className="font-body text-center text-base text-white lg:text-left lg:text-lg"
          data-aos="fade-right"
        >
          Im a 17-year-old high school junior from Missouri. In my free time, I
          like to learn new skills like coding, video editing, playing musical
          instruments, UI design, cooking, etc.; read books about personal
          finance/business; cook food; and watch anime. I used to work at an ed-tech startup.
          Im the CEO of EJ Ecom Holdings LLC, a umbrella company that aims to run multiple
          e-commerce stores across various niches and industries.
        </p>
      </div>
      <div className="flex w-3/6 justify-center" data-aos="fade-left">
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
