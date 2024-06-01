import { ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NavBar = () => {
  return (
    <header className="w-full border-b backdrop-blur" aria-label="navbar">
      <nav className="flex container py-2">
        <div className="flex text-nowrap my-auto font-semibold text-2xl">
          Monitoring Outage
        </div>
        <div className="flex w-full h-full items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex border rounded-full py-1 px-2">
                <p className="flex my-auto text-sm px-2">Name User</p>
                <Avatar className="w-7 h-7 my-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="my-auto">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
