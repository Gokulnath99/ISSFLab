import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { SideBarNavButtonProps } from "@/type";



export function SideBarNavButton({
  icon: Icon,
  className,
  children,
  ...props
}: SideBarNavButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn("gap-2 text-white justify-start", className)}
      {...props}
    >
      {Icon && <Icon size={20}/>}
      <span>{children}</span>
    </Button>
  );
}
