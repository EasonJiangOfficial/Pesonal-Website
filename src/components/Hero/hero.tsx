import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typer from "./typer";
import ScrollAnimation from "../scrollAnimation";

export default function Hero() {
  const gradientClasses: { [key: string]: string } = {
    "custom-green": "text-gradient-green",
    "custom-orange": "text-gradient-orange",
    "custom-red": "text-gradient-red",
    "custom-blue": "text-gradient-blue",
    "custom-purple": "text-gradient-purple",
    "custom-pink": "text-gradient-pink",
  };

  return (
    <>
      <div className="w-full flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-col justify-center ">
          <h1 className=" font-header text-8xl text-white">
            Hi Im Eason
          </h1>
          <h1 className="font-header text-5xl text-white">
            Im a <Typer gradientClasses={gradientClasses} />
          </h1>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </>
  );
}
