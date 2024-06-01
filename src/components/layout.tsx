import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavBar from "./navbar";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

function Layout(props: Props) {
  const { children, centerX, centerY } = props;

  return (
    <div className="w-full h-dvh overflow-auto flex flex-col">
      <nav className="sticky top-0">
        <NavBar />
      </nav>
      <div
        className={cn(
          "container grow flex flex-col",
          centerX && "items-center",
          centerY && "justify-center"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
