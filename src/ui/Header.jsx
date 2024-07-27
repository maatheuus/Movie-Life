import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";

import defaultUser from "../assets/default-user.jpg";
import Navigation from "../features/navigation/Navigation";
import FormSearch from "./FormSearch";
import InputSearch from "./InputSearch";
import { CiSearch } from "react-icons/ci";

function Header() {
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

          <IconButton
            arial-label="guest arear button"
            color="inherit"
            size="medium"
          >
            <Avatar alt="Profile user" src={defaultUser} />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
