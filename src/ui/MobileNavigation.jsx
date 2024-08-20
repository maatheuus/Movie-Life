import { useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { mobileNavigation } from "../features/navigation/Navigation";
import { useUser } from "../features/authentication/useUser";

function MobileNavigation() {
  const [value, setValue] = useState("");
  const [showLabel, setShowLabel] = useState(false);
  const { isAuthenticated } = useUser();

  const handleChange = (newValue) => {
    setValue(newValue);
    setShowLabel(true);
  };

  const filterNavigation = mobileNavigation.filter((nav) => {
    if (nav.label === "Favorites") {
      return isAuthenticated;
    }

    return true;
  });

  return (
    <section className="sm:hidden bg-black/30 backdrop-blur-3xl overflow-hidden fixed bottom-0 w-full h-14 z-[100]">
      <div className="flex justify-around items-center h-full ">
        {filterNavigation.map((nav) => {
          const activeButton = value === nav.label;

          return (
            <NavLink
              key={nav.label}
              to={nav.href}
              className="flex h-full items-center flex-col justify-center"
            >
              <button
                onClick={() => handleChange(nav.label)}
                className="flex flex-col items-center"
              >
                <span>{nav.icon}</span>
                <span
                  className={twMerge(
                    "text-[11px] transition-all duration-500",
                    showLabel && activeButton
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                >
                  {value}
                </span>
              </button>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default MobileNavigation;
