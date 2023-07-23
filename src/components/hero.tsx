import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="black flex-row">
        <h1>Hi Im Eason</h1>
        <h2>Im a Full Stack Developer</h2>
      </div>
      <div className="">
        <Image src="/images/Logo.jpeg" alt="hero" width={500} height={500} />
        </div>
    </>
  );
}
