import Resume from "../../assets/docs/resume.pdf";
import { buttonStyles } from "../Button";
import { twMerge } from "tailwind-merge";

type PDFButtonProps = {
  text: string;
  variant?: boolean;
  className?: string;
};

export function PDFButton({ text, variant, className }: PDFButtonProps) {
  const handleButtonClick = () => {
    window.open(Resume, "_blank");
  };
  const buttonClass = variant
    ? buttonStyles({ variant: "outline" })
    : buttonStyles({ variant: "default" });

  return (
    <button
      onClick={handleButtonClick}
      className={twMerge(buttonClass, className)}
    >
      {text}
    </button>
  );
}
