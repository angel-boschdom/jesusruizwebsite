// NavBar.tsx
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "wouter";

export interface NavItem {
  /** If `href` is provided, this is a simple link item. */
  href?: string;
  /** The label or text that appears in the menu. */
  label: string;
  /** Optional array of sub-items for nested menus (second level). */
  items?: NavItem[];
}

interface NavProps {
  items: NavItem[];
  /** Optional URL for the brand/logo image.
   * If not provided, "MySite" is shown.
   */
  logoUrl?: string;
  /**
   * Optional size for the logo image in pixels.
   * This size is applied to both width and height.
   * Defaults to 40.
   */
  logoSize?: number;
}

/**
 * A responsive navigation component that supports up to two levels of nesting.
 * Uses:
 * - wouter for routing (Link, useLocation)
 * - lucide-react icons
 * - @radix-ui/react-navigation-menu for a11y-friendly behavior
 * - Tailwind CSS for styling & animations
 */
export const NavBar: React.FC<NavProps> = ({
  items,
  logoUrl,
  logoSize = 40,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSubMenu, setActiveSubMenu] = React.useState<string | null>(null);
  const [location] = useLocation();

  /**
   * Toggle the entire mobile menu drawer.
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    // If closing the mobile menu, also close any open submenus
    if (mobileMenuOpen) {
      setActiveSubMenu(null);
    }
  };

  /**
   * Toggle a submenu by label (only in mobile mode).
   */
  const toggleSubMenu = (label: string) => {
    setActiveSubMenu((prev) => (prev === label ? null : label));
  };

  /**
   * Renders the brand (logo or fallback text).
   * The top of the image is pinned to the top of this container (height: 50 px).
   * If the image is taller than 50 px, the bottom will hang below the navbar.
   */
  const renderBrand = () => {
    return (
      <Link
        href="/"
        className="relative overflow-visible"
        style={{
          width: logoSize,
          height: 50, // fixed height for the brand area
        }}
      >
        {logoUrl ? (
          <img
            src={logoUrl}
            alt="Site Logo"
            style={{
              width: logoSize,
              height: logoSize,
            }}
            // Pin the top edge of the logo to the top of this box;
            // if it's taller than 50px, it will hang below.
            className="absolute left-0 top-0 object-contain"
          />
        ) : (
          <div className="text-xl font-bold">MySite</div>
        )}
      </Link>
    );
  };

  return (
    <nav className="relative z-10 bg-background border-b border-border overflow-visible">
      {/* 
        Top bar: 
        - items-start ensures the brand container is at the top 
          (so a taller logo won't get cropped from above). 
        - fixed height: 50px 
        - overflow: visible so the bottom part of the logo can hang below.
      */}
      <div
        className="mx-auto flex items-start justify-between px-4"
        style={{ height: 50, overflow: "visible" }}
      >
        {/* Brand / Logo area */}
        {renderBrand()}

        {/* Hamburger (Menu) button on the right (shown on small screens) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Menu: hidden on small screens, shown on md+ */}
        <NavigationMenu.Root
          className="hidden md:flex items-center gap-6 relative z-50"
          orientation="horizontal"
        >
          <NavigationMenu.List className="flex items-center gap-4">
            {items.map((item) => {
              const isActive = location === item.href;

              return (
                <NavigationMenu.Item key={item.label} className="relative">
                  {item.items ? (
                    // If the item has a sub-menu (dropdown)
                    <>
                      <NavigationMenu.Trigger
                        className={`
                          group inline-flex items-center gap-1
                          px-3 py-2 rounded
                          transition-colors
                          ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted hover:text-foreground text-foreground"
                          }
                        `}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content
                        className="
                          absolute top-full left-0 mt-2
                          min-w-[10rem]
                          rounded-md bg-card shadow-lg
                          data-[state=closed]:animate-accordion-up
                          data-[state=open]:animate-accordion-down
                          z-50
                        "
                      >
                        <ul className="flex flex-col p-2">
                          {item.items.map((subItem) => {
                            const isSubActive = location === subItem.href;
                            return (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href || "#"}
                                  className={`
                                    block px-3 py-2 rounded
                                    transition-colors
                                    ${
                                      isSubActive
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted hover:text-foreground text-foreground"
                                    }
                                  `}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    // If it's just a direct link
                    <Link
                      href={item.href || "#"}
                      className={`
                        inline-block px-3 py-2 rounded
                        transition-colors
                        ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted hover:text-foreground text-foreground"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`
          md:hidden 
          fixed top-0 left-0 h-screen w-screen 
          bg-black bg-opacity-50
          z-40
          transition-opacity duration-300 
          ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`
          md:hidden 
          fixed top-0 right-0 h-screen w-3/4 max-w-xs
          z-50 flex flex-col bg-background 
          transform transition-transform duration-300
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button at top of drawer */}
        <div className="p-4 flex justify-between items-center border-b border-border">
          {renderBrand()}
          <button
            onClick={toggleMobileMenu}
            className="text-foreground p-2 hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu items (mobile) */}
        <nav className="overflow-y-auto flex-grow p-2">
          <ul className="space-y-2">
            {items.map((item) => {
              const hasSubItems = !!item.items;
              const isActiveSubMenu = activeSubMenu === item.label;

              return (
                <li key={item.label}>
                  {hasSubItems ? (
                    // If there are nested items
                    <>
                      <button
                        onClick={() => toggleSubMenu(item.label)}
                        className={`
                          w-full flex items-center justify-between
                          px-3 py-2 text-left text-foreground
                          hover:bg-muted 
                          rounded 
                          transition-colors
                        `}
                      >
                        <span>{item.label}</span>
                        {isActiveSubMenu ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      {/* Collapsible sub-items */}
                      <div
                        className={`
                          overflow-hidden 
                          transition-[max-height] duration-300 ease-in-out
                          ${isActiveSubMenu ? "max-h-96" : "max-h-0"}
                        `}
                      >
                        <ul className="mt-1 border-l border-border ml-4 space-y-1">
                          {item.items?.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href || "#"}
                                className={`
                                  block px-3 py-2 text-foreground 
                                  rounded 
                                  hover:bg-muted
                                  transition-colors
                                `}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    // Just a single-level item
                    <Link
                      href={item.href || "#"}
                      className={`
                        block px-3 py-2 
                        text-foreground hover:bg-muted 
                        rounded 
                        transition-colors
                        ${
                          location === item.href ? "text-primary font-medium" : ""
                        }
                      `}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </nav>
  );
};