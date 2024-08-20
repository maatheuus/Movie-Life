import { NavLink, useParams } from "react-router-dom";

import { twMerge } from "tailwind-merge";
import { Film, House, Tv, Search, Bookmark } from "lucide-react";

export const navigationTop = [
  {
    label: "Series",
    href: "/tv",
    icon: <Tv />,
  },
  {
    label: "Movie",
    href: "/movie",
    icon: <Film />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <House />,
  },
  ...navigationTop,
  {
    label: "Favorites",
    href: "/favorite",
    icon: <Bookmark />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <Search />,
  },
];

function Navigation() {
  const { explore } = useParams();
  return (
    <nav className="hidden sm:flex items-center gap-2 ml-5">
      {navigationTop.map((nav) => {
        const href = nav.href.split("/")[1];
        const active = href === explore;
        return (
          <NavLink
            key={nav.label}
            className={twMerge(
              "px-3 text-neutral-400 transition-all duration-150 hover:text-neutral-50",
              active && "font-bold text-neutral-50"
            )}
            to={nav.href}
          >
            <span className="font-semibold hover:font-bold">{nav.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navigation;
