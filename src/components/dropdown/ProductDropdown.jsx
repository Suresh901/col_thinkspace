import { BsGrid } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../dropdown/DropdownMenu";
import { IoIosArrowDown } from "react-icons/io";

export function ProductDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <div className="border border-3 p-2 rounded-md lg:flex items-center gap-2 cursor-pointer hidden bg-white">
            <BsGrid />
            <h1>Our Products</h1>
            <IoIosArrowDown />
          </div>
          <div className="border border-3 p-2 rounded-md flex lg:hidden items-center gap-2">
            <BsGrid />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto z-[10] bg-white">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col items-center justify-between">
          <DropdownMenuItem>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            COL Global
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            COL Global
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            COL Global
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            COL Global
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            COL Global
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            COL Global
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
