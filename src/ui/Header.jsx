import { NavLink, Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import defaultUser from "../assets/default-user.jpg";

function Header() {
  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <div>
          <Link to="/">Logo</Link>
        </div>

        <Navigation />

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden sm:block"
            />
            <button className="text-2xl text-white">
              <CiSearch />
            </button>
          </form>

          <button>
            <Avatar alt="Profile user" src={defaultUser} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  const navigation = [
    { label: "Tv Shows", href: "tv" },
    { label: "Movie", href: "movie" },
  ];

  return (
    <nav className="hidden sm:flex items-center gap-1 ml-5">
      {navigation.map((nav) => {
        return (
          <NavLink
            key={nav.label}
            className="px-2 hover:text-neutral-50"
            to={nav.href}
          >
            {nav.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Header;
