import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import reactIcon from "../../assets/icons/risoterm.png";
import nextIcon from "../../assets/icons/nextjs.png";
import nodeIcon from "../../assets/icons/nodejs.png";
import dockerIcon from "../../assets/icons/docker.png";
import githubIcon from "../../assets/icons/github.png";

const stacks = [
  { name: "React", icon: reactIcon },
  { name: "Next", icon: nextIcon },
  { name: "JavaScript", icon: githubIcon },
  { name: "Node", icon: nodeIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "GitHub", icon: githubIcon },
];

export default function StackCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: true,
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current],
  );

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
    >
      <div className="flex">
        {stacks.map((item, index) => (
          <div
            key={index}
            className="flex-[0_0_150px] mr-4 bg-zinc-200 p-4 rounded-xl flex flex-col items-center "
          >
            <img src={item.icon} className="" />
          </div>
        ))}
      </div>
    </div>
  );
}
