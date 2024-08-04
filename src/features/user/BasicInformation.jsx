import { Avatar } from "@mui/material";
import defaultUser from "../../assets/default-user.jpg";
import { useUser } from "../authentication/useUser";
import { useUpdate } from "./useUpdate";
import { useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";

function BasicInformation() {
  const { user } = useUser();
  const { update, isLoading } = useUpdate();
  const { register, formState, handleSubmit } = useForm();

  function onSubmit(data) {
    const newData = {};
    const photo = data.photo[0];

    Object.keys(data).forEach((key) => {
      if (key === "photo" && data[key].length === 0) return;
      if (data[key] !== user[key]) {
        newData[key] = data[key];
      }
    });
    const updatedFields = {
      ...newData,
      photo,
    };
    update(updatedFields);
  }

  if (user === undefined) return null;
  const { email, name, photo } = user;

  return (
    <div className="bg-stone-200 px-8 py-10 flex flex-col gap-y-6 row-span-1 rounded-t-lg rounded-tr-lg md:rounded-lg lg:row-span-2 lg:pt-12 ">
      <div>
        <h2 className="text-2xl text-stone-900 font-bold">
          Personal Information
        </h2>
        <p className="text-neutral-500 mt-1">
          Use a permanent address where you can receive mail.
        </p>
      </div>

      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 items-center">
          <label htmlFor="photo" className="flex gap-x-5">
            <Avatar
              alt="Profile user"
              src={photo ? `../../../public/img/users/${photo}` : defaultUser}
              // src={defaultUser}
              className="!rounded-xl !h-20 !w-20"
            />
            <div className="flex flex-col">
              <span className="bg-black text-sm font-bold rounded-md w-fit px-3 py-1 cursor-pointer">
                Change Avatar
              </span>
              <span className="text-zinc-500 !text-[13px] lg:text-base">
                JPG, GIF or PNG. 3MB max.
              </span>
            </div>
          </label>
          <div className="flex flex-col gap-y-2">
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              {...register("photo")}
              className="hidden disabled:bg-gray-700"
            />
          </div>
        </div>

        <div className="flex-1">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-stone-950 font-bold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            disabled={isLoading}
            defaultValue={name}
            className="block w-full max-w-80 py-2 px-4 border-2 rounded-md border-stone-600 bg-transparent text-neutral-800 outline-none disabled:bg-gray-300 disabled:border-black/20"
            {...register("name", {
              required: {
                value: true,
                message: "Cannot be empty. Provide you name, please!",
              },
            })}
          />
        </div>

        <div className="mb-3 flex gap-x-6">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-stone-950 font-bold"
            >
              Email Address
            </label>
            <input
              type="email"
              autoComplete="email"
              id="email"
              disabled={isLoading}
              defaultValue={email}
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
              name="email"
              className="block w-full max-w-80 py-2 px-4 border-2 rounded-md border-stone-600 bg-transparent text-neutral-800 outline-none disabled:bg-gray-300 disabled:border-black/20"
            />
          </div>
        </div>
        <div className="w-full flex justify-start">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full max-w-48 rounded-lg bg-stone-800 py-2 text-stone-200 hover:bg-stone-950 hover:text-stone-50 transition-all duration-200 disabled:bg-stone-800/70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <SpinnerMini className="mx-auto text-white" />
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BasicInformation;
