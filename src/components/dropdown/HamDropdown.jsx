import * as React from "react";

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <RxHamburgerMenu />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto mt-2 bg-white z-10">
        <DropdownMenuSeparator />
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>Build Up</DropdownMenuItem>
        <DropdownMenuItem>Sandbox</DropdownMenuItem>
        <DropdownMenuItem>Contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
