import { BsGrid } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown/DropdownMenu";
import { IoIosArrowDown } from "react-icons/io";

export function ProductDropdown({ isAtTop, isTransparentPage }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="">
          <div
            className={`border border-3 p-2 rounded-md md:flex items-center gap-2 cursor-pointer hidden ${
              isAtTop ? "bg-white" : "bg-[#f6f6f6] shadow-md"
            } `}
          >
            <BsGrid className="text-2xl" />
            <h1>Our Products</h1>
            <IoIosArrowDown />
          </div>
          <div className="p-2 rounded-md flex md:hidden items-center gap-2 text-2xl">
            <BsGrid
              className={`text-2xl ${
                isTransparentPage ? "text-white" : "text-black"
              } `}
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto z-[10] bg-white px-4 py-2">
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col px-2 text-start">
          <a href="/col-global" target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>COL Global</DropdownMenuItem>
          </a>
          <a href="/col-university" target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>COL University</DropdownMenuItem>
          </a>
          <a href="/col-learn" target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>COL Learn</DropdownMenuItem>
          </a>
          <a href="/col-jobs" target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>COL Jobs</DropdownMenuItem>
          </a>
          <a href="/col-euphoria" target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>COL Euphoria</DropdownMenuItem>
          </a>
          <a href="/col-nirvana" target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>COL Nirvana</DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
