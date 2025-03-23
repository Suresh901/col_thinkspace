import * as React from "react";

// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown/DropdownHamMenu";
import { RxHamburgerMenu } from "react-icons/rx";

export function HamDropdown() {
  //   const [showStatusBar, setShowStatusBar] = React.useState < Checked > true;
  //   const [showActivityBar, setShowActivityBar] =
  //     React.useState < Checked > false;
  //   const [showPanel, setShowPanel] = React.useState < Checked > false;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <RxHamburgerMenu />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto mt-2 bg-white z-10">
        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>Our Team</DropdownMenuItem>
        <DropdownMenuItem>Build With Us</DropdownMenuItem>
        <DropdownMenuItem>Sandbox</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
