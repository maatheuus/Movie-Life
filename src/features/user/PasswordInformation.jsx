function PasswordInformation() {
  return (
    <div className="bg-red-800 rounded-lg">
      <h2>Password</h2>

      <form className="px-6 flex flex-col gap-y-6">
        <div className="">
          <label
            htmlFor="currentPassword"
            className="block mb-2 text-sm text-white"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="block w-full max-w-80 py-3 px-5 border rounded-md border-white bg-transparent text-gray-300 outline-none disabled:bg-gray-700"
          />
        </div>
        <div className="">
          <label
            htmlFor="newPassword"
            className="block mb-2 text-sm text-white"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="block w-full max-w-80 py-3 px-5 border rounded-md border-white bg-transparent text-gray-300 outline-none disabled:bg-gray-700"
          />
        </div>
        <div className="">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm text-white"
          >
            Re-type New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="block w-full max-w-80 py-3 px-5 border rounded-md border-white bg-transparent text-gray-300 outline-none disabled:bg-gray-700"
          />
        </div>
      </form>
    </div>
  );
}

export default PasswordInformation;
