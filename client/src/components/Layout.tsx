import { ReactNode } from "react";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className={cn(
        "container mx-auto px-4 py-8",
        "transition-all duration-300 ease-in-out"
      )}>
        {children}
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p className="font-montserrat text-sm">
          © {new Date().getFullYear()} Jesús Ruiz - Organista
        </p>
      </footer>
    </div>
  );
}
