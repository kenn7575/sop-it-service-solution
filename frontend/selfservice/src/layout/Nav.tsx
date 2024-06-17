import { Home, Package, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useLocation } from "react-router-dom";

export function Nav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30  hidden w-14 flex-col border-r bg-background sm:flex ">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <NavButton path="/" icon={<Home strokeWidth={1.5} />} label="Hjem" />
          <NavButton
            path="/udlaan"
            icon={<Package strokeWidth={1.5} />}
            label="Dine udlån"
          />
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <NavButton
            path="/indstillinger"
            icon={<Settings strokeWidth={1.5} />}
            label="Indstillinger"
          />
        </nav>
      </TooltipProvider>
    </aside>
  );
}
function NavButton({
  path,
  icon,
  label,
}: {
  path: string;
  icon: any;
  label: string;
}) {
  const location = useLocation();
  let rootPath = location.pathname.split("/")[1];
  return (
    <>
      {rootPath === path.substring(1) ? (
        <a
          href={path}
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          {icon}
          <span className="sr-only">{label}</span>
        </a>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={path}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              {icon}
              <span className="sr-only">{label}</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">{label}</TooltipContent>
        </Tooltip>
      )}
    </>
  );
}
