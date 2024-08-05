import { useForm } from "react-hook-form";
import { useSendToken } from "./useSendToken";
import { CgPassword } from "react-icons/cg";
import { getToken, useResetPassword } from "./useResetPassword";
import { LuAlertCircle } from "react-icons/lu";

function NewPassword() {
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { resetPassword, isLoading } = useResetPassword();
  const token = getToken();

  function onSubmit(updatePassword) {
    resetPassword({ token, updatePassword });
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-100">
      <div className="max-w-lg w-96 rounded-xl border border-gray-200 bg-stone-50 shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500">
              <CgPassword className="h-6 w-6" />
            </div>
            <h1 className="block text-2xl font-bold text-gray-800">
              Set new password
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Must be at least 6 characters.
            </p>
          </div>

          <div className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm text-gray-600 font-semibold"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      defaulValue="123456"
                      disabled={isLoading}
                      className="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm text-stone-950 font-semibold outline-none ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
                      aria-describedby="email-error"
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

                    <p
                      className="mt-2 text-xs text-rose-600 peer-invalid:block"
                      id="email-error"
                    >
                      {errors?.password?.message}
                    </p>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm text-gray-600 font-semibold"
                  >
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      defaulValue="123456"
                      disabled={isLoading}
                      className="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm text-stone-950 font-semibold outline-none ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
                      aria-describedby="email-error"
                      {...register("confirmPassword", {
                        required: "Please, confirm your password",
                        validate: (value) =>
                          value === getValues().password ||
                          "Passwords does not match!",
                      })}
                    />

                    <p
                      className="mt-2 text-xs text-rose-600 peer-invalid:block"
                      id="email-error"
                    >
                      {errors?.confirmPassword?.message}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-800 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-500 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Updating password..." : "Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
