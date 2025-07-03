import { cn } from "@/utils";
import { Link } from "wouter";

type NavigationProps = {
  className?: string;
};

export const NavigationBar = ({ className }: NavigationProps) => {
  return (
    <section
      className={cn("p-2 flex space-x-2 border-2 border-blue-600", className)}
    >
      <Link href="/">Send</Link>
      <Link href="/trade">Trade</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/pool">Pool</Link>
    </section>
  );
};
