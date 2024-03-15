import { useState } from "react";
import style from "./style.module.css";
import { ThemeButton } from "../Button";

type ImageOverlayProps = {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  portLink: string;
};

export function ImageOverlay({
  imageUrl,
  alt,
  title,
  description,
  portLink,
}: ImageOverlayProps) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={style.imageContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        srcSet={`${imageUrl}?w=162&auto=format&dpr=2 2x`}
        src={`${imageUrl}?w=162&auto=format`}
        alt={alt}
        loading="lazy"
        style={{
          borderRadius: "8px",
          display: "block",
          width: "100%",
          cursor: "pointer",
          maxHeight: "400px",
        }}
        className={hovered ? "blur" : ""}
      />

      {hovered && (
        <div className={`${style.overlay} text-center rounded-md p-3`}>
          <a href={portLink} target="_blank">
            <h4 className="text-offWhite">{title}</h4>
            <p className="p-2">{description}</p>
            <ThemeButton className="mt-8">View</ThemeButton>
          </a>
        </div>
      )}
    </div>
  );
}
