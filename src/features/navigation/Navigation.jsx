import { NavLink } from "react-router-dom";

import { RiMovie2Line, RiHomeLine } from "react-icons/ri";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

export const navigationTop = [
  { label: "Tv Shows", href: "/tv", icon: <PiTelevisionSimpleBold /> },
  { label: "Movie", href: "/movie", icon: <RiMovie2Line /> },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <RiHomeLine />,
  },
  ...navigationTop,
  {
    label: "search",
    href: "/search",
    icon: <CiSearch />,
  },
];

function Navigation() {
  return (
    <nav className="hidden sm:flex items-center gap-1 ml-5">
      {navigationTop.map((nav) => {
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

export default Navigation;
