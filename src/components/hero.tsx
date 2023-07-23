import React from "react";
import Image from "next/image";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="flex flex-col">
          <h1 className="text-8xl" text-lg>
            Hi Im Eason
          </h1>
          <h1 className="text-5xl" text-lg>
            Im a{" "}
            <TypeIt
              className="text-5xl"
              element={"h1"}
              options={{
                strings: ["Full Stack Developer"],

                loop: true,
              }}
            ></TypeIt>
          </h1>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </>
  );
}
