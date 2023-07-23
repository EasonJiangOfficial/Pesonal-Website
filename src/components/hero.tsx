import React, { useEffect, useState } from "react";
import Image from "next/image";
import TypeIt from "typeit-react";

export default function Hero() {
  const [color, setColor] = useState("");

  useEffect(() => {console.log(color)}, [color]);

  const colorClasses: { [key: string]: string } = {
    'custom-green': 'text-green-600',
    'custom-yellow': 'text-yellow-600',
    'custom-red': 'text-red-600',
    'custom-blue': 'text-blue-600',
    'custom-purple': 'text-purple-600',
    'custom-pink': 'text-pink-600',
  };
  
  
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
              className={`text-5xl ${colorClasses[color]}`}
              element={"span"}
              options={{
                loop: true,
              }}
              getBeforeInit={(instance) => {
                instance
                  .exec(async() => {
                    await setColor("custom-green");
                  })
                  .type("Full Stack Developer.")
                  .pause(500)
                  .delete()
                  .exec(async() => {
                    await setColor("custom-yellow");
                  })
                  .type("Entrepreneur.")
                  .pause(500)
                  .delete()
                  .exec(async() => {
                    await setColor("custom-red");
                  })
                  .type("Cook.")
                  .pause(500)
                  .delete()
                  .exec(async() => {
                    await setColor("custom-blue");
                  })
                  .type("Student.")
                  .pause(500)
                  .delete()
                  .exec(async() => {
                    await setColor("custom-purple");
                  })
                  .type("Musician.")
                  .pause(500)
                  .delete()
                  .exec(async() => {
                    await setColor("custom-pink");
                  })
                  .type("Video Editor.")
                  .pause(500)
                  .delete();
                return instance;
              }}
            ></TypeIt>
          </h1>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </>
  );
}
