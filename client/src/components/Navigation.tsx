// Navigation.tsx
import React from "react";
import { Link } from "wouter";
import { NavBar, NavItem } from "@/components/NavBar"; // adjust the import path if needed

// Define nested nav items that used to be hardcoded.
const projectsItems: NavItem[] = [
  { href: "/proyectos/organo", label: "El órgano" },
  { href: "/proyectos/publicaciones", label: "Publicaciones" },
];

const cicloOrganoItems: NavItem[] = [
  { href: "/ciclo/2025", label: "2025" },
  { href: "/ciclo/2024", label: "2024" },
];

const agendaItems: NavItem[] = [
  { href: "/agenda/2026", label: "2026" },
  { href: "/agenda/2025", label: "2025" },
  { href: "/agenda/2024", label: "2024" },
  { href: "/agenda/2023", label: "2023" },
];

// Define the primary nav items array
const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/biografia", label: "Biografía" },
  { label: "Proyectos", items: projectsItems },
  { label: "Ciclo de Órgano", items: cicloOrganoItems },
  { href: "/media", label: "Media" },
  { label: "Agenda", items: agendaItems },
  { href: "/contacto", label: "Contacto" },
];

export default function Navigation() {
  return (
    <>
      {/* Navigation using the generic NavBar */}
      <NavBar 
        logoUrl="https://angel-boschdom.github.io/jesusruizorganista-media/assets/firmajesus.png" 
        logoSize={90} // specify size in pixels; can be adjusted as needed
        items={navItems} 
      />
    </>
  );
}