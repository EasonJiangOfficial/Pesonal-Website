import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="w-full flex flex-col h-screen justify-center items-center">
      <Image src="/images/me.png" alt="hero" width={320} height={320} />
    </div>
  );
}
