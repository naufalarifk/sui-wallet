import { cn } from "@/utils";
import { ReactElement } from "react";

//only accepts react element instead of react node to avoid mistakably typing a word on some element, when it gets big it kinda eliminates chance of additional debugging from occuring
type GlobalWrapperProps = {
  className?: string;
  children: ReactElement | ReactElement[];
};

export const GlobalWrapper = ({ children, className }: GlobalWrapperProps) => {
  return (
    <section className={cn("p-4 border-2 border-red-600", className)}>
      {children}
    </section>
  );
};
