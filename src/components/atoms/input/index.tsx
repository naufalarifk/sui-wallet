import { Input } from "@heroui/input";
import { VariantProps } from "@heroui/react";
import { cva } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  isLoading?: boolean;
  children: ReactNode;
}

const inputVariants = cva(
  "block w-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 border border-gray-300",
        ghost: "bg-white2 text-gray2",
        "outline-primary": "bg-transparent border border-primary text-primary",
      },
      size: {
        sm: "h-9 rounded-2xl px-3",
        default: "h-[54px] rounded-3xl px-4",
        lg: "h-11 rounded-2xl px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const AppInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, size, children, isLoading = false, ...props },
    ref
  ) => {
    const placements = ["inside", "outside", "outside-left"];
    type Placement = "inside" | "outside" | "outside-left";

    return <></>;
  }
);
