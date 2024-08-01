import { Avatar } from "@mui/material";
import defaultUser from "../../assets/default-user.jpg";

function BasicInformation() {
  return (
    <div className="bg-stone-600 rounded-lg flex flex-col gap-y-6 row-span-1 lg:row-span-2">
      <div>
        <h2>Account Information</h2>
        <p>Edit your profile quickly</p>
      </div>

      <form className="px-6 flex flex-col gap-y-6">
        <div className="flex gap-4 h-16 items-center">
          <label htmlFor="file">
            <Avatar
              alt="Profile user"
              src={defaultUser}
              className="!rounded-md !h-16 !w-16"
            />
            {/* <FaArrowUpFromBracket className="w-auto h-5 text-gray-500" /> */}
          </label>
          <div className="flex flex-col">
            <button className="bg-black rounded-md px-1 py-1">
              Change Avatar
              <input
                id="file"
                type="file"
                //   {...register("photo")}
                className="hidden disabled:bg-gray-700"
              />
            </button>
            <span className="text-zinc-500 text-[12px] lg:text-base">
              JPG, GIF or PNG. 3MB max.
            </span>
          </div>
        </div>

        <div className="flex gap-x-5">
          <div className="">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="block w-full max-w-80 py-3 px-5 border rounded-md border-white bg-transparent text-gray-300 outline-none disabled:bg-gray-700"
            />
          </div>
          <div className="">
            <label htmlFor="lastName" className="block mb-2 text-sm text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="block w-full max-w-80 py-3 px-5 border rounded-md border-white bg-transparent text-gray-300 outline-none disabled:bg-gray-700"
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="email" className="block mb-2 text-sm text-white">
            Email Address
          </label>
          <input
            type="email"
            autoComplete="email"
            id="email"
            name="email"
            className="block w-full max-w-80 py-3 px-5 border rounded-md border-white bg-transparent text-gray-300 outline-none disabled:bg-gray-700"
          />
        </div>
      </form>
    </div>
  );
}

export default BasicInformation;
