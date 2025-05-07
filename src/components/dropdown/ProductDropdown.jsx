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
import { Link } from "react-router-dom";

export function ProductDropdown({ isAtTop }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="">
          <div
            className={`border border-3 p-2 rounded-md md:flex items-center gap-2 cursor-pointer hidden   ${
              isAtTop ? "bg-white" : "bg-[#f6f6f6] shadow-md"
            }`}
          >
            <BsGrid className="text-2xl" />
            <h1>Our Products</h1>
            <IoIosArrowDown />
          </div>
          <div className=" p-2 rounded-md flex md:hidden items-center gap-2 text-2xl">
            <BsGrid />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto z-[10] bg-white px-4 py-2">
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col px-2 text-start">
          <Link to="/col-global">
            <DropdownMenuItem>COL Global</DropdownMenuItem>
          </Link>
          <Link to="/col-university">
            <DropdownMenuItem>COL University</DropdownMenuItem>
          </Link>
          <Link to="/col-learn">
            <DropdownMenuItem>COL Learn</DropdownMenuItem>
          </Link>
          <Link to="/col-jobs">
            <DropdownMenuItem>COL Jobs</DropdownMenuItem>
          </Link>
          <Link to="/col-euphoria">
            <DropdownMenuItem>COL Euphoria</DropdownMenuItem>
          </Link>
          <Link to="/col-nirvana">
            <DropdownMenuItem>COL Nirvana</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
