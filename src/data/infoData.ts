import Graphql from "../assets/programLogos/graphql.svg?react";
import Js from "../assets/programLogos/js.svg?react";
import Php from "../assets/programLogos/php.svg?react";
import ReactIcon from "../assets/programLogos/react.svg?react";
import Typescript from "../assets/programLogos/typescript.svg?react";
import Tailwind from "../assets/programLogos/tailwind.svg?react";
import Wordpress from "../assets/programLogos/wordpress.svg?react";

import WebTube from "../assets/portfolio/web-tube.jpg";
import WW from "../assets/portfolio/whiskey-wave.jpg";

interface InfoObject {
  id: number;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  skill: number;
}

export const infoObject: InfoObject[] = [
  {
    id: 1,
    icon: Js,
    title: "Javascript",
    skill: 90,
  },
  {
    id: 2,
    icon: Graphql,
    title: "GraphQL",
    skill: 30,
  },

  {
    id: 3,
    icon: ReactIcon,
    title: "React",
    skill: 90,
  },
  {
    id: 4,
    icon: Tailwind,
    title: "Tailwind",
    skill: 100,
  },
  {
    id: 5,
    icon: Php,
    title: "PHP",
    skill: 80,
  },
  {
    id: 6,
    icon: Typescript,
    title: "Typescript",
    skill: 40,
  },

  {
    id: 7,
    icon: Wordpress,
    title: "WordPress",
    skill: 100,
  },
];

interface JobObject {
  id: number;
  company: string;
  role: string;
  dates: string;
}

export const jobObject: JobObject[] = [
  {
    id: 1,
    company: "EverCommerce",
    role: "Senior Web Developer",
    dates: "Sept 2023 - Present",
  },
  {
    id: 2,
    company: "EverCommerce",
    role: "Web Developer",
    dates: "July 2021 - Sept 2023",
  },
  {
    id: 3,
    company: "Rocky Mountain Code",
    role: "Web Developer/Freelancer",
    dates: "Jan 2019 - Present",
  },
  {
    id: 4,
    company: "YourWebPro",
    role: "Front End Web Developer",
    dates: "Jan 2019 - July 2021",
  },
];

interface PortObject {
  id: number;
  img: string;
  alt: string;
  height: number;
  portTitle: string;
  shortDescription: string;
  description: string;
  category: string;
  url: string;
  languages: string[];
}

export const portObject: PortObject[] = [
  {
    id: 1,
    img: WW,
    alt: "Whiskey Wave portfolio project",
    height: 150,
    portTitle: "Whiskey Wave",
    shortDescription: "Fun yet challending piece",
    description:
      "I built this small app because I really wanted to complete a piece that was fun, challening, and centered around something I enjoy. There were no courses I followed on this. My inspiration for the design came from several different sources such as Dribbble, Behance, and Pinterest. I mocked up all the imagery, content, and branding on my own. For future state, I want to build out more interior pages, and a store front.",
    category: "TypeScript React",
    url: "https://whiskey-wave.vercel.app/",
    languages: ["tailwind", "typescript", "material", "react", "api"],
  },
  {
    id: 2,
    img: WebTube,
    alt: "WebTube portfolio project",
    height: 90,
    portTitle: "WebTube",
    shortDescription: "YouTube site clone built with Vite, Tailwind, and React",
    description:
      "I followed along a tutorial for this one, and it was my first deep dive into using React contexts along with complex Tailwind classes and utilities. From what I've learned with this build, I was able to apply to my Whiskey Wave projects, and others I'm working on completing. For future state, I want to add in login functionality to be able to save favorite videos",
    category: "TypeScript React",
    url: "https://webtube-six.vercel.app/",
    languages: ["tailwind", "typescript", "material", "react"],
  },
];
