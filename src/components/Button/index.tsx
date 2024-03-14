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
          "py-2",
          "px-4",
          "text-base",
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
          "py-2",
          "px-4",
          "text-[13px]",
        ],
        dark: [
          "bg-primary-dark",
          "hover:bg-primary-dark-hover",
          "text-whiteRock-100",
        ],
      },
      size: {
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
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function ThemeButton({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
