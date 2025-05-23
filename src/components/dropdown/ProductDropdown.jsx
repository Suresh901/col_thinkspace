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
import { Link } from "react-router-dom";

const productLinks = [
  { name: "COL Global", path: "https://colglobal.org/" },
  { name: "COL University", path: "https://uni.colglobal.org/" },
  { name: "COL Learn", path: "https://learn.colglobal.org/" },
  { name: "COL Jobs", path: "https://job.colglobal.org/" },
  { name: "COL Euphoria", path: "https://www.euphoria.colglobal.org/" },
  { name: "COL Nirvana", path: "https://colthinkspace.com/" },
];

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
          {productLinks.map(({ name, path }) => (
            <Link to={path} target="_blank" rel="noopener noreferrer">
              <DropdownMenuItem>{name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
