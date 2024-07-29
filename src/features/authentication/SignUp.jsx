import { Button } from "@mui/material";
import LayoutAuth from "./LayoutAuth";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaArrowUpFromBracket,
  FaEnvelope,
  FaLock,
  FaEye,
} from "react-icons/fa6";

function SignUp() {
  return (
    <LayoutAuth title="Sign up to save some movies">
      <form className="w-full max-w-md">
        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <FaUser className="w-auto h-5 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            type="text"
            className="block w-full py-3 px-11 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
            placeholder="Username"
          />
        </div>

        <label
          for="dropzone-file"
          className="flex items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer border-gray-600 bg-gray-900"
        >
          <FaArrowUpFromBracket className="w-auto h-5 text-gray-500" />

          <h2 className="mx-3 text-gray-400">Profile Photo</h2>

          <input id="dropzone-file" type="file" className="hidden" />
        </label>

        <div className="relative flex items-center mt-6">
          <span className="absolute">
            <FaEnvelope className="w-auto h-5 mx-3 text-gray-500" />
          </span>

          <input
            type="email"
            className="block w-full py-3 px-11 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
            placeholder="Email address"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <FaLock className="w-auto h-5 mx-3 text-gray-500" />
          </span>

          <input
            type="password"
            className="block w-full py-3 px-11 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
            placeholder="Password"
          />

          <button className="absolute right-1">
            <FaEye className="w-auto h-5 mx-3 text-gray-500" />
          </button>
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <FaLock className="w-auto h-5 mx-3 text-gray-500" />
          </span>

          <input
            type="password"
            className="block w-full py-3 px-11 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
            placeholder="Confirm Password"
          />

          <button className="absolute right-1">
            <FaEye className="w-auto h-5 mx-3 text-gray-500" />
          </button>
        </div>

        <div className="mt-6">
          <Button
            className="w-full !bg-[#2332a4f6] !py-2"
            color="primary"
            variant="contained"
          >
            Sign Up
          </Button>

          <div className="mt-6 text-center ">
            <Link to="/login" className="text-sm text-blue-500 hover:underline">
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </LayoutAuth>
  );
}

export default SignUp;
