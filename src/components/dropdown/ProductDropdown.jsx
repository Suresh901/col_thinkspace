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

export function ProductDropdown({ isAtTop }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <div
            className={`border border-3 p-2 rounded-md md:flex items-center gap-2 cursor-pointer hidden  ${
              isAtTop ? "bg-white" : "bg-[#f6f6f6] shadow-md"
            }`}
          >
            <BsGrid />
            <h1>Our Products</h1>
            <IoIosArrowDown />
          </div>
          <div className="border border-3 p-2 rounded-md flex md:hidden items-center gap-2">
            <BsGrid />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto z-[10] bg-white">
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
