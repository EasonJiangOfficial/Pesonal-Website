import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineMail,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Hero() {
  const gradientClasses = {
    "custom-green": "text-gradient-green",
    "custom-orange": "text-gradient-orange",
    "custom-red": "text-gradient-red",
    "custom-blue": "text-gradient-blue",
    "custom-purple": "text-gradient-purple",
    "custom-pink": "text-gradient-pink",
  };
  const contactButtons = [
    <Link
      href="https://twitter.com/Eason_Official"
      target="_blank"
      rel="noopener noreferrer"
      key="twitter"
    >
      <AiOutlineTwitter
        fill="white"
        size={40}
        stroke="none"
        className="cursor-pointer"
      />
    </Link>,
    <Link
      href="https://www.linkedin.com/in/eason-jiang-18a165207/"
      target="_blank"
      rel="noopener noreferrer"
      key="linkedin"
    >
      <AiFillLinkedin
        fill="white"
        size={40}
        stroke="none"
        className="cursor-pointer"
      />
    </Link>,
    <Link
      href="https://github.com/EasonJiangOfficial"
      target="_blank"
      rel="noopener noreferrer"
      key="github"
    >
      <AiFillGithub
        fill="white"
        size={40}
        stroke="none"
        className="cursor-pointer"
      />
    </Link>,
    <Link href="mailto:easonjiangabc@gmail.com" key="mail">
      <AiOutlineMail
        fill="white"
        size={40}
        stroke="none"
        className="cursor-pointer"
      />
    </Link>,
  ];
  const [hover, setHover] = useState("");
  const [cursor, setCursor] = useState("");
  const [name, setName] = useState("Eason");
  const [showicons, setShowIcons] = useState(false);

  const handleMouseEnter = () => {
    if (name === "Eason") {
      setHover("text-gradient-blue");
    }
    setCursor("cursor-pointer");
  };
  const handleMouseLeave = () => {
    setHover("text-white");
    setCursor("cursor-auto");
  };
  const clickedName = () => {
    if (name === "Eason") {
      setName("Contact Me");
      setShowIcons(true);
    } else {
      setName("Eason");
      setShowIcons(false);
    }
  };
  const renderIcons = () => {
    return contactButtons.map((button, index) => {
      return (
        <span className="fadeInUp" key={index}>
          {button}
        </span>
      );
    });
  };
  const unrenderIcons = () => {
    return("")
  };
  return (
    <div className="w-full gap-10 flex flex-col min-h-screen justify-center items-center">
      <div className="flex gap-5 flex-row justify-center items-center">
        {showicons ? renderIcons() : unrenderIcons()}
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
        <div className="flex flex-col justify-center items-center lg:items-start max-w-[750px]">
          <h1
            className="font-header text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-white text-center lg:text-left drop-shadow-lg"
            data-aos="fade-up"
          >
            {name == "Eason" ? "Hi Im " : null}
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={clickedName}
              className={hover + " " + cursor}
            >
              {name}
            </span>
          </h1>
          <p className="font-body text-base text-white text-center lg:text-left drop-shadow-lg">I'm a 19-year-old from rural Missouri. I like making videos online, singing, personal finance, tech, and anime.</p>
        </div>
        <div className="flex justify-center items-center w-[400px] h-[400px] rounded-full overflow-hidden" data-aos="fade-left">
          <Image
            src="/images/me.jpeg"
            width={400}
            height={400}
            alt="Picture of Eason Jiang"
            className="rounded-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
