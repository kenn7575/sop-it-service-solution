import { Home, PanelLeft, Settings, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs ">
        <nav className="flex flex-col h-full gap-3 text-lg font-medium">
          <NavButton
            className="mt-8"
            path="/"
            icon={<Home strokeWidth={1.5} />}
            label="Home"
          />
          <NavButton
            path="/udlaan"
            icon={<PackageOpen strokeWidth={1.5} />}
            label="Dine udlån"
          />
          <NavButton
            className="mt-auto"
            path="/indstillinger"
            icon={<Settings strokeWidth={1.5} />}
            label="indstillinger"
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
export function NavButton({
  path,
  icon,
  label,
  className,
}: {
  path: string;
  icon: any;
  label: string;
  className?: string;
}) {
  const location = useLocation();
  let rootPath = location.pathname.split("/")[1];
  return (
    <>
      <li className={cn("list-none", className)}>
        {rootPath === path.substring(1) ? (
          <a
            href={path}
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            {icon}
            {label}
          </a>
        ) : (
          <a
            href={path}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            {icon}
            {label}
          </a>
        )}
      </li>
    </>
  );
}
