import { useState } from "react";
import { FaArrowUpFromBracket, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

function FormAuth({
  register,
  getValues,
  errors,
  name,
  confirmPassword,
  photo,
  login,
  profilePhoto,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleShowPassword(value) {
    if (value === "password") setShowPassword(!showPassword);
    if (value === "confirm") setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <>
      {name && (
        <div className="relative flex flex-col">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full py-3 px-5 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
            placeholder="Your name"
            {...register("name", {
              required: {
                value: true,
                message: "Please, enter your name!",
              },
            })}
          />
          <p className="text-red-600 mb-4 font-medium">
            {errors?.name?.message}
          </p>
        </div>
      )}

      {photo && (
        <label
          htmlFor="file"
          className="w-full flex items-center px-3 py-3 mx-auto text-center border-2 border-dashed rounded-lg cursor-pointer border-gray-600 bg-gray-900"
        >
          <FaArrowUpFromBracket className="w-auto h-5 text-gray-500" />

          <h2 className="mx-3 text-gray-400">{profilePhoto}</h2>

          <input
            id="file"
            type="file"
            {...register("profilePhoto")}
            className="hidden"
          />
        </label>
      )}

      <div className="relative flex flex-col">
        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
          Email Address
        </label>

        <input
          type="email"
          autoComplete="email"
          id="email"
          name="email"
          className="block w-full py-3 px-5 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
          placeholder="example@example.com"
          {...register("email", {
            required: {
              value: true,
              message: "Please, enter your email!",
            },
            validate: (email) => {
              const regex =
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
              const checkEMail = regex.test(email);
              if (!checkEMail) return "Enter a valid email address";
            },
          })}
        />
        <p className="text-red-600 my-1 font-medium">
          {errors?.email?.message}
        </p>
      </div>

      <div>
        <label
          htmlFor="password"
          className="flex justify-between mb-2 text-sm text-gray-600 relative"
        >
          <span>Password</span>

          <div className="absolute right-2 -bottom-9 flex items-center ps-3 text-gray-primary">
            <button
              variation="primary"
              type="button"
              className="absolute right-1 -top-4"
              onClick={() => handleShowPassword("password")}
            >
              {showPassword ? (
                <FaEyeSlash className="w-auto h-5 mx-3 text-gray-500" />
              ) : (
                <FaEye className="w-auto h-5 mx-3 text-gray-500" />
              )}
            </button>
          </div>
          {login && (
            <Link to="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
          )}
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          className="block w-full py-3 px-5 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
          {...register("password", {
            required: {
              value: true,
              message: "Please, enter your password!",
            },
            minLength: {
              value: 6,
              message: "The min length is 6 caracteres",
            },
          })}
        />
        <p className="text-red-600 my-1 font-medium">
          {errors?.password?.message}
        </p>
      </div>

      {confirmPassword && (
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm text-gray-600 relative"
          >
            Confirm your password
            <div className="absolute right-2 -bottom-8 flex items-center ps-3 text-gray-primary">
              <button
                variation="primary"
                type="button"
                className="absolute right-1"
                onClick={() => handleShowPassword("confirm")}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="w-auto h-5 mx-3 text-gray-500" />
                ) : (
                  <FaEye className="w-auto h-5 mx-3 text-gray-500" />
                )}
              </button>
            </div>
          </label>

          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className="block w-full py-3 px-5 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-none border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-30"
            {...register("confirmPassword", {
              required: "Please, confirm your password",
              validate: (value) =>
                value === getValues().password || "Passwords does not match!",
            })}
          />

          <p className="text-red-600 mb-1 font-medium">
            {errors?.confirmPassword?.message}
          </p>
        </div>
      )}
    </>
  );
}

export default FormAuth;
