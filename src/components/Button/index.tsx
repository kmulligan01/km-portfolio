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
          "bg-primary",
          "hover:bg-primary-hover",
          "hover:text-offWhite",
          "text-offWhite",
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

type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<"a"> & {
    url?: string;
    target?: string;
  };

export function ThemeButton({
  variant,
  size,
  className,
  url,
  target,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={url}
      target={target}
      className={twMerge(buttonStyles({ variant, size }), className)}
      {...props}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
