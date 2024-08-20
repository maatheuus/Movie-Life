import { Avatar } from "@mui/material";
import defaultUser from "../../assets/default-user.jpg";

// handle with upload of avatar
function AvatarUpload({ register, photo }) {
  return (
    <div className="flex gap-4 items-center">
      <label htmlFor="photo" className="flex gap-x-5">
        <Avatar
          alt="Profile user"
          src={photo ? `../../../public/img/users/${photo}` : defaultUser}
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
      <input
        type="file"
        name="photo"
        id="photo"
        accept="image/*"
        {...register("photo")}
        className="hidden disabled:bg-gray-700"
      />
    </div>
  );
}

// handle with personal information
function PersonalInfo({ register, name, email, disabled, errors }) {
  return (
    <>
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
          disabled={disabled}
          defaultValue={name}
          className="block w-full max-w-80 py-2 px-4 border-2 rounded-md border-stone-600 bg-transparent text-neutral-800 outline-none disabled:bg-gray-300 disabled:border-black/20"
          {...register("name", {
            required: {
              value: true,
              message: "Cannot be empty. Provide your name, please!",
            },
          })}
        />
        <p className="text-red-600 mb-4 font-medium">{errors?.name?.message}</p>
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
            disabled
            defaultValue={email}
            name="email"
            className="block w-full max-w-80 py-2 px-4 border-2 rounded-md border-stone-600 bg-transparent text-neutral-800 outline-none disabled:bg-neutral-400 disabled:border-black disabled:cursor-not-allowed"
          />
        </div>
      </div>
    </>
  );
}

// handle with password fields
export function PasswordFields({ register, errors, getValues }) {
  return (
    <>
      <div>
        <label
          htmlFor="currentPassword"
          className="block mb-2 text-sm text-stone-950 font-bold"
        >
          Current Password
        </label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          className="block w-full max-w-80 py-2 px-2 border-2 rounded-md border-black bg-transparent text-neutral-800 outline-none disabled:bg-gray-700"
          {...register("currentPassword", {
            required: {
              value: true,
              message: "Provide your current password.",
            },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        <p className="text-red-600 my-1 font-medium">
          {errors?.currentPassword?.message}
        </p>
      </div>
      <div>
        <label
          htmlFor="newPassword"
          className="block mb-2 text-sm text-stone-950 font-bold"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          className="block w-full max-w-80 py-2 px-2 border-2 rounded-md border-black bg-transparent text-neutral-800 outline-none disabled:bg-gray-700"
          {...register("newPassword", {
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        <p className="text-red-600 my-1 font-medium">
          {errors?.newPassword?.message}
        </p>
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm text-stone-950 font-bold"
        >
          Re-type New Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="block w-full max-w-80 py-2 px-2 border-2 rounded-md border-black bg-transparent text-neutral-800 outline-none disabled:bg-gray-700"
          {...register("confirmPassword", {
            required: "Please, confirm your password",
            validate: (value) =>
              value === getValues().newPassword || "Passwords does not match!",
          })}
        />
        <p className="text-red-600 mb-4 font-medium">
          {errors?.confirmPassword?.message}
        </p>
      </div>
    </>
  );
}

// main component
export function FormUser(props) {
  const { register, errors, disabled, user } = props;

  if (user === undefined) return [];
  const { email, name, photo } = user;

  return (
    <>
      <AvatarUpload register={register} photo={photo} />
      <PersonalInfo
        register={register}
        name={name}
        email={email}
        disabled={disabled}
        errors={errors}
      />
    </>
  );
}
