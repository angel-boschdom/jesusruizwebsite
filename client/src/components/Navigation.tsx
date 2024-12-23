import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectsItems = [
  { href: "/proyectos/organo", label: "El órgano" },
  { href: "/proyectos/musica-liturgia", label: "Música y liturgia" },
  { href: "/proyectos/publicaciones", label: "Publicaciones" },
  { href: "/proyectos/festival-medinaceli", label: "Festival de Medinaceli" },
  { href: "/proyectos/ciclo-organo", label: "Ciclo de órgano" },
];

const eventsItems = [
  { href: "/eventos/2025", label: "2025" },
  { href: "/eventos/2024", label: "2024" },
  { href: "/eventos/2023", label: "2023" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [location] = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/biografia", label: "Biografía" },
    {
      label: "Proyectos",
      items: projectsItems,
    },
    { href: "/media", label: "Media" },
    {
      label: "Eventos",
      items: eventsItems,
    },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 relative">
        <Link href="/">
          <img
            src="https://angel-boschdom.github.io/jesusruizorganista-media/assets/firmajesus.png"
            alt="Jesús Ruiz Logo"
            className="h-[95px] cursor-pointer relative top-4"
          />
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </Button>
        
        {/* Desktop menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.items ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger className="h-9 px-4 py-2">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.items.map((subItem) => (
                        <li key={subItem.href}>
                          <Link href={subItem.href}>
                            <NavigationMenuLink asChild>
                              <span
                                className={cn(
                                  "block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors cursor-pointer",
                                  "hover:bg-accent hover:text-accent-foreground",
                                  location === subItem.href && "bg-accent text-accent-foreground"
                                )}
                              >
                                {subItem.label}
                              </span>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href!}>
                    <NavigationMenuLink asChild>
                      <span
                        className={cn(
                          "block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors cursor-pointer",
                          "hover:bg-accent hover:text-accent-foreground",
                          location === item.href && "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.label}
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-[998] md:hidden transition-opacity duration-300 ease-in-out",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile menu panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 w-full max-w-xs z-[999] isolate",
            "flex flex-col",
            "bg-background text-foreground",
            "transform transition-all duration-300 ease-in-out",
            isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
          )}
        >
          <div className="flex h-16 items-center justify-end px-4 border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </Button>
          </div>
          <nav className="h-[calc(100vh-4rem)] overflow-y-auto">
            <ul className="px-4 py-6 space-y-6">
              {navItems.map((item) => (
                <li key={item.label} className="text-lg">
                  {item.items ? (
                    <div className="space-y-3">
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="flex items-center justify-between w-full font-semibold"
                      >
                        <span>{item.label}</span>
                        {expandedSections.includes(item.label) ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      <ul
                        className={cn(
                          "pl-4 space-y-3 overflow-hidden transition-all duration-300",
                          expandedSections.includes(item.label)
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <Link href={subItem.href}>
                              <span
                                className={cn(
                                  "block py-2 transition-colors cursor-pointer",
                                  "hover:text-accent",
                                  location === subItem.href && "text-accent"
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link href={item.href!}>
                      <span
                        className={cn(
                          "block py-2 transition-colors cursor-pointer",
                          "hover:text-accent",
                          location === item.href && "text-accent"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}