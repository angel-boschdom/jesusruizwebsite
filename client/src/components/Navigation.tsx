import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
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
  { href: "/eventos/2024", label: "2024" },
  { href: "/eventos/2023", label: "2023" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/">
          <a className="font-cormorant text-2xl font-bold">Jesús Ruiz</a>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Desktop menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.items ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.href}>
                          <NavigationMenuLink asChild>
                            <Link href={subItem.href}>
                              <a className={cn(
                                "block select-none rounded-md p-2 leading-none no-underline outline-none",
                                "hover:bg-accent hover:text-accent-foreground",
                                location === subItem.href && "bg-accent"
                              )}>
                                {subItem.label}
                              </a>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href!}>
                    <a className={cn(
                      "block select-none rounded-md p-2 leading-none no-underline outline-none",
                      "hover:bg-accent hover:text-accent-foreground",
                      location === item.href && "bg-accent"
                    )}>
                      {item.label}
                    </a>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container px-4 py-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.items ? (
                      <div className="space-y-2">
                        <span className="font-semibold">{item.label}</span>
                        <ul className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <li key={subItem.href}>
                              <Link href={subItem.href}>
                                <a className="block py-1">{subItem.label}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link href={item.href!}>
                        <a className="block py-1">{item.label}</a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
