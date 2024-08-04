function PasswordInformation() {
  return (
    <div className="bg-stone-200 px-8 py-10 flex flex-col gap-y-6 md:rounded-lg lg:pt-12">
      <div>
        <h2 className="text-2xl text-stone-900 font-bold">Password</h2>
        <p className="text-neutral-500">
          Update your password associated with your account.
        </p>
      </div>

      <form className="px-6 flex flex-col gap-y-6">
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
            className="block w-full max-w-80 py-2 px-4 border-2 rounded-md border-black bg-transparent text-neutral-800 outline-none disabled:bg-gray-700"
          />
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
            className="block w-full max-w-80 py-2 px-4 border-2 rounded-md border-black bg-transparent text-neutral-800 outline-none disabled:bg-gray-700"
          />
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
            className="block w-full max-w-80 py-2 px-4 border-2 rounded-md border-black bg-transparent text-neutral-800 outline-none disabled:bg-gray-700"
          />
        </div>

        <div className="w-full flex justify-start">
          <button className="w-full max-w-48 items-end rounded-lg bg-stone-800 py-2 text-stone-200 hover:bg-stone-950 hover:text-stone-50 transition-all duration-200">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordInformation;
