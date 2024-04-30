import React from "react";
import { SideBarNavButton } from "./SideBarNavButton";
import { Menu } from "lucide-react";
import { SideBarItems } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SideBarMobileProps {
  SideBarItems: SideBarItems;
}

function SideBarMobile(props: SideBarMobileProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="p-5">
        <Menu className="h-8 w-8 text-[#FFCB05]" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex flex-col gap-1 w-full mt-16">
            {props.SideBarItems.links.map((link, index) =>
              link.href ? (
                <Link key={index} href={link.href}>
                  <SideBarNavButton
                    variant={pathname === link.href ? "secondary" : "ghost"}
                    icon={link.icon}
                    className="w-full"
                  >
                    {link.label}
                  </SideBarNavButton>
                </Link>
              ) : (
                <div key={index}>
                  <SideBarNavButton
                    variant={"ghost"}
                    icon={link.icon}
                    className="w-full"
                  >
                    {link.label}
                  </SideBarNavButton>
                  <ul>
                    {link.sub?.map((item, index) => item.href && (
                      <li key={index}>
                        <Link key={index} href={item.href}>
                          <SideBarNavButton
                            variant={
                              pathname === item.href ? "secondary" : "ghost"
                            }
                            className="w-72 ml-10"
                          >
                            {item.label}
                          </SideBarNavButton>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideBarMobile;
