import { Link } from "react-router-dom";
import bgImage from "../../../public/movie_wallpaper.jpg";
import { RiMovie2Line } from "react-icons/ri";
import { Button } from "@mui/material";
import LayoutAuth from "./LayoutAuth";

function Login() {
  return (
    <LayoutAuth title="Sign in to access your account">
      <form>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            className="block w-full px-4 py-2 mt-2 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
          />
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <Link
              to="#"
              className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            className="block w-full px-4 py-2 mt-2 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 outline-none border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-30"
          />
        </div>

        <div className="mt-6">
          <Button
            className="w-full !bg-[#2332a4f6]"
            color="primary"
            variant="contained"
          >
            Sign in
          </Button>

          <div className="mt-6 text-center ">
            <Link
              to="/signup"
              className="text-sm text-blue-500 hover:underline"
            >
              Don't have an account?
            </Link>
          </div>
        </div>
      </form>
    </LayoutAuth>
  );
}

export default Login;
