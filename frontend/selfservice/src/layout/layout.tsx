import { LogOut, Search, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { Outlet } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";
import { Breadcrumbs } from "./Breadcrumbs";
import ModeToggle from "@/components/mode-toggle";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Nav></Nav>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <MobileNav />
          <Breadcrumbs></Breadcrumbs>

          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="/kenni.png"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="overflow-hidden object-contain rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Kenni Kollemorten</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild></DropdownMenuItem>
              <a className="p-2 flex items-center gap-2" href="/indstillinger">
                <Settings size={20} />
                Indstillinger
              </a>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2">
                <LogOut size={20} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex items-center justify-center gap-4 p-4 sm:px-6 sm:py-0 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
