import { LucideIcon } from "lucide-react";
import { ButtonProps } from "./components/ui/button";

export type Attack = {
  title: string;
  path: string;
}[];

export type groups = {
  title: string;
  audios: {
    name: string;
    url: {
      name: string;
      urls: string;
    }[];
  }[];
}[];

export type SideBarItems = {
  links: Array<{
    label: string;
    href?: string;
    icon?: LucideIcon;
    sub?: Array<{
      label: string;
      href: string;
    }>;
  }>;
};

export interface SideBarNavButtonProps extends ButtonProps {
  icon?: LucideIcon;
}
