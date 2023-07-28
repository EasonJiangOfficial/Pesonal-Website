import React, { useState } from "react";
import TypeIt from "typeit-react";

interface TyperProps {
  gradientClasses: { [key: string]: string };
}

export default function Typer({ gradientClasses }: TyperProps) {
  const [gradient, setGradient] = useState("");

  return (
    <TypeIt
      className={`text-5xl ${gradientClasses[gradient]}`}
      element={"span"}
      options={{
        loop: true,
      }}
      getBeforeInit={(instance) => {
        instance
          .exec(async () => {
            await setGradient("custom-green");
          })
          .type("Full Stack Developer.")
          .pause(500)
          .delete()
          .exec(async () => {
            await setGradient("custom-orange");
          })
          .type("Entrepreneur.")
          .pause(500)
          .delete()
          .exec(async () => {
            await setGradient("custom-red");
          })
          .type("Cook.")
          .pause(500)
          .delete()
          .exec(async () => {
            await setGradient("custom-blue");
          })
          .type("Student.")
          .pause(500)
          .delete()
          .exec(async () => {
            await setGradient("custom-purple");
          })
          .type("Musician.")
          .pause(500)
          .delete()
          .exec(async () => {
            await setGradient("custom-pink");
          })
          .type("Video Editor.")
          .pause(500)
          .delete();
        return instance;
      }}
    ></TypeIt>
  );
}
