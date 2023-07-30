import React from "react";

export default function ProjectsList() {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio. Vitae congue eu consequat ac felis donec et odio. Lobortis scelerisque fermentum dui faucibus in. Volutpat odio facilisis mauris sit amet massa vitae tortor. Diam quis enim lobortis scelerisque fermentum dui faucibus. Sed lectus vestibulum mattis ullamcorper velit sed. Purus in massa tempor nec feugiat nisl pretium fusce id. Tincidunt praesent semper feugiat nibh sed. Eget dolor morbi non arcu risus. Purus viverra accumsan in nisl nisi. In egestas erat imperdiet sed euismod nisi. Non blandit massa enim nec dui nunc. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Mauris rhoncus aenean vel elit scelerisque mauris. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Et ultrices neque ornare aenean euismod elementum nisi quis. Sit amet consectetur adipiscing elit duis. Fermentum leo vel orci porta non pulvinar neque. Ut sem nulla pharetra diam sit. Auctor eu augue ut lectus. Etiam sit amet nisl purus. Id leo in vitae turpis massa.",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem. Etiam non quam lacus suspendisse faucibus interdum posuere. Parturient montes nascetur ridiculus mus mauris. Adipiscing vitae proin sagittis nisl rhoncus mattis. Morbi tempus iaculis urna id volutpat. Adipiscing elit pellentesque habitant morbi. Egestas egestas fringilla phasellus faucibus. Tempus iaculis urna id volutpat lacus. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Est ante in nibh mauris cursus mattis. Lacus sed turpis tincidunt id aliquet risus feugiat in. Malesuada proin libero nunc consequat interdum varius sit. Eros donec ac odio tempor orci dapibus ultrices. In ornare quam viverra orci sagittis eu volutpat. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Nec ultrices dui sapien eget mi proin sed libero enim.",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus et. Eget gravida cum sociis natoque penatibus et. Integer vitae justo eget magna fermentum iaculis eu. Lectus proin nibh nisl condimentum. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Egestas congue quisque egestas diam in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Lobortis mattis aliquam faucibus purus in massa tempor nec. Dictumst quisque sagittis purus sit. Id semper risus in hendrerit. Pretium nibh ipsum consequat nisl vel pretium. Fames ac turpis egestas integer eget aliquet nibh. Odio facilisis mauris sit amet massa vitae tortor condimentum.",
    },
  ];

  return (
    <div className="mt-8 gap-12 place-items-center grid grid-rows-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-md bg-green-400 p-9 w-full h-[36rem] flex flex-col justify-center items-center">
          <div className="h-2/6">
            
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl h-4/6">{project.title}</h1>
            <p className="text-2">{project.description.slice(0,400) + "..."}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
