import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";

import Navigation from "../features/navigation/Navigation";
import defaultUser from "../assets/default-user.jpg";
import { useUser } from "../features/authentication/useUser";
import FormSearch from "./FormSearch";
import InputSearch from "./InputSearch";

function Header() {
  const { isAuthenticated } = useUser();
  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-75 z-50">
      <div className="container mx-auto px-3 flex items-center h-full">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <Navigation />
        <div className="ml-auto flex items-center gap-5">
          <FormSearch className="hidden sm:flex">
            <InputSearch />
            <IconButton
              aria-label="search"
              color="inherit"
              size="medium"
              sx={{ cursor: "default" }}
            >
              <CiSearch />
            </IconButton>
          </FormSearch>

          {isAuthenticated ? (
            <Link to="/account" arial-label="guest arear button">
              <Avatar alt="Profile user" src={defaultUser} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="w-full py-2 px-4 rounded-lg bg-[#2332a473] font-bold hover:bg-[#2332a4f6] transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
