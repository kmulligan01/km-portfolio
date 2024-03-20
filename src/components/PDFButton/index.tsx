import Resume from "../../assets/docs/resume.pdf";
import { buttonStyles } from "../Button";
import { twMerge } from "tailwind-merge";

type PDFButtonProps = {
  text: string;
  variant?: boolean;
};

export function PDFButton({ text, variant }: PDFButtonProps) {
  const handleButtonClick = () => {
    window.open(Resume, "_blank");
  };
  const buttonClass = variant
    ? buttonStyles({ variant: "outline" })
    : buttonStyles({ variant: "default" });

  return (
    <button
      onClick={handleButtonClick}
      className={twMerge(buttonClass, "grow-0 flex-shrink-0 py-[5px]")}
    >
      {text}
    </button>
  );
}
