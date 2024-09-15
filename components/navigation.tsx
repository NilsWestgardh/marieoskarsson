import React from "react";
// Utils
import Link from "next/link";
import Image from "next/image";
// Components
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// Custom components
import LanguageToggle from "@/components/language-toggle";

const isSwedish = true; // Placeholder

export default function Navigation() {
  return (
    <div
      id="navigation-container"
      className="
        flex
        flex-row
        justify-between
        items-center
        w-full
        h-16
        px-4
        py-2
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-background
        border-b
        border-foreground/10
        shadow-lg
        shadow-foreground/5
      "
    >
      <div>
        LOGO
      </div>
      <div
        id="navigation-links"
        className="
          flex
          flex-row
          justify-between
          items-center
        "
      >
        <Link href={isSwedish ? "/författare" : "/author"}>
          <Button variant="ghost">
            {isSwedish ? "Författare" : "Author"}
          </Button>
        </Link>
        <Link href="/journalist">
          <Button variant="ghost">
            Journalist
          </Button>
        </Link>
        <Link href={isSwedish ? "/nyheter" : "/news"}>
          <Button variant="ghost">
            {isSwedish ? "Nyheter" : "News"}
          </Button>
        </Link>
        <Link href={isSwedish ? "/kontakt" : "/contact"}>
          <Button variant="ghost">
            {isSwedish ? "Kontakt" : "Contact"}
          </Button>
        </Link>
      </div>
      <div>
        <LanguageToggle />
      </div>
    </div>
  );
}