import { ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "sonner";
import { useToken } from "@/utils/contexts/token";

const NavBar = () => {
  const { user, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast("Logout successfully");
  }

  return (
    <header className="w-full container bg-white border-b" aria-label="navbar">
      <nav className="flex py-2">
        <div className="flex my-auto">
          <img
            className="h-10 w-full"
            src="/src/assets/logo-lintashomebyljn.png"
            alt=""
          />
        </div>
        <div className="flex w-full h-full items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex border rounded-full py-1 px-2">
                <p className="hidden sm:flex sm:my-auto sm:text-sm sm:px-2">
                  {user.name}
                </p>
                <Avatar className="w-7 h-7 my-auto">
                  <AvatarImage src="/user.png" />
                  <AvatarFallback>OP</AvatarFallback>
                </Avatar>
                <div className="my-auto">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount>
              <DropdownMenuLabel className="font-light block sm:hidden">
                Hi,
                <span className="font-normal text-wrap"> {user.name}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="block sm:hidden" />
              <DropdownMenuItem onClick={() => handleLogout()}>
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
