import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import defaultUser from "../assets/default-user.jpg";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <div>
          <h1>Logo</h1>
        </div>

        <nav className="hidden md:flex items-center gap-1 ml-5">
          <div>
            <NavLink className="px-2 hover:text-neutral-100">Movies</NavLink>
            <NavLink className="px-2 hover:text-neutral-100">Tv Shows</NavLink>
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form action="" className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
            />
            <button className="text-2xl text-white">
              <CiSearch />
            </button>
          </form>
          <div>
            <Avatar alt="Cindy Baker" src={defaultUser} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
