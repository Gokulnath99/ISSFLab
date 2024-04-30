"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Download,
  FolderClosed,
  Home,
  Landmark,
  Newspaper,
  Users,
  Wrench,
} from "lucide-react";

import SideBarMobile from "./SideBarMobile";
import { SideBarItems } from "@/type";

import { useMediaQuery } from "usehooks-ts";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Software",
    href: "/downloads/software",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Data",
    href: "/downloads/data",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const sideBarItems: SideBarItems = {
  links: [
    { label: "Home", href: "/", icon: Home },
    { label: "Members", href: "/members", icon: Users },
    { label: "Grants", href: "/grants", icon: Landmark },
    { label: "Publications", href: "/publications", icon: Newspaper },
    { label: "Projects", href: "/projects", icon: FolderClosed },
    {
      label: "Downloads",
      icon: Download,
      sub: [
        { label: "Software", href: "/downloads/software" },
        { label: "Data", href: "/downloads/data" },
      ],
    },
    { label: "Useful Resources", href: "/useful-resources", icon: Wrench },
  ],
};

export function NavBar() {
  return (
    <div className="bg-[#00274C] flex justify-between lg:h-36 h-24 w-screen drop-shadow-md">
      <div className=" text-[#FFCB05] text-xl text-center p-5 content-center">
        ISSF
      </div>
      <div className="hidden lg:flex lg:justify-end p-5 content-center text-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/members" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Members
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/grants" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Grants
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/publications" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Publications
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Downloads</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="lg:hidden content-center text-center p-5 ">
        <SideBarMobile SideBarItems={sideBarItems} />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
