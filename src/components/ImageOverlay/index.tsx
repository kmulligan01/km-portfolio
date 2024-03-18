import { useState } from "react";
import style from "./style.module.css";
import { ThemeButton } from "../Button";
import { motion } from "framer-motion";

type ImageOverlayProps = {
  imageUrl: string;
  alt: string;
  title: string;
  portLink: string;
};

export function ImageOverlay({
  imageUrl,
  alt,
  title,
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
      className={`${style.imageContainer} border-4 border-offWhite rounded-md`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        srcSet={`${imageUrl}?w=162&auto=format&dpr=2 2x`}
        src={`${imageUrl}?w=162&auto=format`}
        alt={alt}
        loading="lazy"
        style={{
          display: "block",
          width: "100%",
          cursor: "pointer",
          maxHeight: "400px",
          filter: "grayscale(100%)",
          opacity: "0.7",
        }}
        className={hovered ? "blur" : ""}
      />

      {hovered && (
        <motion.div
          className={`${style.overlay} text-center  p-3`}
          whileHover={{ scale: 1.2 }}
        >
          <div className="flex flex-col items-center">
            <h4 className="text-offWhite">{title}</h4>
            <ThemeButton
              className="mt-8"
              url={portLink}
              target={"_blank"}
              aria-label={`View Kendra's ${title} project`}
            >
              View
            </ThemeButton>
          </div>
        </motion.div>
      )}
    </div>
  );
}
