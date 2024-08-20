import { Link } from "react-router-dom";
import { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { Search, Bookmark } from "lucide-react";

import logo from "../../public/img/logo.png";
import defaultUser from "../assets/default-user.jpg";

import { useUser } from "../features/authentication/useUser";
import Navigation from "../features/navigation/Navigation";
import FormSearch from "./FormSearch";
import InputSearch from "./InputSearch";

function Header() {
  const { isAuthenticated, user = [] } = useUser();
  const { photo } = user;
  const [hover, setHover] = useState(false);

  // console.log(isAuthenticated);
  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-75 z-50">
      <div className="container mx-auto px-6 sm:px-4 lg:px-10 flex items-center h-full">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo the website"
              className="w-10 h-10 rounded-full"
              height={20}
              width={20}
            />
          </Link>
        </div>
        <Navigation />
        <div className="mx-auto flex items-center gap-2">
          <FormSearch className="hidden sm:flex">
            <IconButton
              aria-label="search"
              color="inherit"
              size="medium"
              sx={{ cursor: "default" }}
            >
              <Search />
            </IconButton>
            <InputSearch />
          </FormSearch>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <div className="hidden sm:block">
                <IconButton
                  aria-label="search"
                  color="inherit"
                  size="medium"
                  sx={{ cursor: "default" }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Link to="/favorite">
                    {hover ? <Bookmark fill="#fff" /> : <Bookmark />}
                  </Link>
                </IconButton>
              </div>
              <Link to="/account" arial-label="guest arear button">
                <Avatar
                  alt="Profile user"
                  src={
                    photo ? `../../../public/img/users/${photo}` : defaultUser
                  }
                />
              </Link>
            </>
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
