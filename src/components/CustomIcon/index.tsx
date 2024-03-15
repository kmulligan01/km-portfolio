import Graphql from "../../assets/programLogos/graphql.svg?react";
import Js from "../../assets/programLogos/js.svg?react";
import Php from "../../assets/programLogos/php.svg?react";
import ReactIcon from "../../assets/programLogos/react.svg?react";
import Typescript from "../../assets/programLogos/typescript.svg?react";
import Tailwind from "../../assets/programLogos/tailwind.svg?react";
import Wordpress from "../../assets/programLogos/wordpress.svg?react";
import MaterialUi from "../../assets/programLogos/material-ui.svg?react";
import Api from "../../assets/programLogos/api.svg?react";

type MyCustomIconProps = {
  customIcon: string;
};

export function CustomIcon({ customIcon }: MyCustomIconProps) {
  let iconToRender;
  let titleToRender;
  switch (customIcon) {
    case "graphql":
      iconToRender = <Graphql width="30" height="30" className="invert" />;
      titleToRender = "GraphQL";
      break;
    case "js":
      iconToRender = <Js width="30" height="30" className="invert" />;
      titleToRender = "Javascript";
      break;
    case "Php":
      iconToRender = <Php width="30" height="30" className="invert" />;
      titleToRender = "PHP";
      break;
    case "react":
      iconToRender = <ReactIcon width="30" height="30" className="invert" />;
      titleToRender = "React";
      break;
    case "typescript":
      iconToRender = <Typescript width="30" height="30" className="invert" />;
      titleToRender = "Typescript";
      break;

    case "tailwind":
      iconToRender = <Tailwind width="30" height="30" className="invert" />;
      titleToRender = "Tailwind";
      break;
    case "wordpress":
      iconToRender = <Wordpress width="30" height="30" className="invert" />;
      titleToRender = "Wordpress";
      break;
    case "material":
      iconToRender = <MaterialUi width="30" height="30" className="invert" />;
      titleToRender = "Material UI";
      break;
    case "api":
      iconToRender = <Api width="30" height="30" className="invert" />;
      titleToRender = "API's";
      break;

    default:
      iconToRender = null;
  }

  return (
    <div className="flex gap-4">
      <div className="border-2 border-secondary p-2 rounded-md flex items-center justify-center ">
        {iconToRender}
      </div>
      <p className="text-left font-links">{titleToRender}</p>
    </div>
  );
}
