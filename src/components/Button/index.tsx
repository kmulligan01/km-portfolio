import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["transition-colors", "rounded-md", "font-links", "cursor-pointer"],
  {
    variants: {
      variant: {
        default: [
          "bg-offWhite",
          "hover:bg-secondary-hover",
          "hover:text-offWhite",
          "text-secondary",
          "font-normal",
          "text-sm",
        ],
        outline: [
          "border",
          "border-offWhite",
          "border-2",
          "text-offWhite",
          "font-normal",
          "bg-transparent",
          "hover:bg-secondary-hover",
          "hover:border-secondary-hover",
        ],
        dark: [
          "bg-primary-dark",
          "hover:bg-primary-dark-hover",
          "text-whiteRock-100",
        ],
      },
      size: {
        default: ["text-base", "py-2", "px-4"],
        outline: ["text-[13px]", "py-[3px]", "px-4"],
        icon: [
          "rounded-full",
          "w-10",
          "h-10",
          "flex",
          "items-center",
          "justify-center",
          "p-2.5",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"a">;

export function ThemeButton({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    ></a>
  );
}
