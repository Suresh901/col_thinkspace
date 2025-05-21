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
import { Link } from "react-router-dom";

export function HamDropdown({ isTransparentPage }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <RxHamburgerMenu
            className={`text-2xl ${
              isTransparentPage ? "text-white" : "text-black"
            } `}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto mt-2 bg-white z-10 px-4">
        <DropdownMenuSeparator />
        <Link to="/">
          <DropdownMenuItem>Home</DropdownMenuItem>
        </Link>
        <Link to="/about">
          <DropdownMenuItem>About Us</DropdownMenuItem>
        </Link>
        <Link to="/build">
          <DropdownMenuItem>Build Up</DropdownMenuItem>
        </Link>
        <Link to="/sandbox">
          <DropdownMenuItem>Sandbox</DropdownMenuItem>
        </Link>
        <Link to="/contact">
          <DropdownMenuItem>Contact</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
