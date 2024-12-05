import { ReactNode } from "react";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className={cn(
        "flex-1 w-full",
        "px-4 py-6 sm:py-8 md:py-12",
        "mx-auto max-w-[90rem]",
        "transition-all duration-300 ease-in-out"
      )}>
        {children}
      </main>
      <footer className="mt-auto border-t">
        <div className={cn(
          "container mx-auto",
          "px-4 py-6 sm:py-8",
          "text-center text-sm text-muted-foreground"
        )}>
          <p className="font-montserrat">
            © {new Date().getFullYear()} Jesús Ruiz - Organista
          </p>
        </div>
      </footer>
    </div>
  );
}
