import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../features/navigation/Navigation";

function MobileNavigation() {
  return (
    <section className="sm:hidden bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full h-14">
      <div className="flex justify-between items-center h-full ">
        {mobileNavigation.map((nav) => {
          return (
            <NavLink
              key={nav.label}
              to={nav.href}
              className="px-8 flex h-full items-center flex-col justify-center"
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default MobileNavigation;
