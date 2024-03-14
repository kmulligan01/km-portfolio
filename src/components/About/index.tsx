import { useEffect, useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Graphql from "../../assets/programLogos/graphql.svg?react";
import Js from "../../assets/programLogos/js.svg?react";
import Php from "../../assets/programLogos/php.svg?react";
import ReactIcon from "../../assets/programLogos/react.svg?react";
import Typescript from "../../assets/programLogos/typescript.svg?react";
import Tailwind from "../../assets/programLogos/tailwind.svg?react";
import Vite from "../../assets/programLogos/vite.svg?react";
import Wordpress from "../../assets/programLogos/wordpress.svg?react";

export function About() {
  const [quadrants, setQuadrants] = useState<{ x: number; y: number }[]>([]);
  const cW = 600;
  const cH = 400;
  const w = 60;
  const h = 60;
  const icons = [
    <Graphql width={w} height={h} />,
    <Js width={w} height={h} />,
    <Php width={w} height={h} />,
    <ReactIcon width={w} height={h} />,
    <Typescript width={w} height={h} />,
    <Tailwind width={w} height={h} />,
    <Vite width={w} height={h} />,
    <Wordpress width={w} height={h} />,
  ];

  useEffect(() => {
    const generateRandomQuadrants = () => {
      const numIcons = icons.length;
      const factor = Math.sqrt(numIcons);
      const quadrants: { x: number; y: number }[] = [];

      for (let i = 0; i < numIcons; i++) {
        const x = (Math.random() * cW) / factor; // Adjust for icon width
        const y = (Math.random() * cH) / factor; // Adjust for icon height

        quadrants.push({ x, y });
      }

      return quadrants;
    };

    setQuadrants(generateRandomQuadrants());
  }, []);

  return (
    <section>
      <div className="container grid grid-cols-2 justify-between">
        <div>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            tempore incidunt rem consequuntur corporis quos sit minima quisquam
            quidem adipisci. Amet cupiditate fuga iure commodi. Alias numquam
            suscipit consectetur magni. Soluta commodi magni porro omnis ab vel
            impedit quia aliquam harum odio voluptate aspernatur vitae quis
            fugit ipsum ut iste dolorem sint, iusto veniam eum assumenda. Optio
            temporibus quae animi!
          </p>
        </div>
        <div className=" h-fit">
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              position: "relative",
              height: `${cH}px`,
              display: "flex",
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
            {quadrants.map((quadrant, index) => {
              const factorX = (0.5 + 0.2 * (index + 1)) as number;
              return (
                <div key={index}>
                  <MouseParallaxChild
                    factorX={factorX}
                    factorY={0.5}
                    style={{
                      filter: "invert(1)",
                      position: "absolute",
                      left: quadrant.x,
                      top: quadrant.y,
                    }}
                  >
                    {icons[index]}
                  </MouseParallaxChild>
                </div>
              );
            })}
          </MouseParallaxContainer>
        </div>
      </div>
    </section>
  );
}
