import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typer from "./typer";

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
      <div className="w-full flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col justify-center ">
          <h1 className="text-8xl" text-lg>
            Hi Im Eason
          </h1>
          <h1 className="text-5xl" text-lg>
            Im a <Typer gradientClasses={gradientClasses} />
          </h1>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </>
  );
}
