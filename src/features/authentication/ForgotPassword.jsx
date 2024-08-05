import { useForm } from "react-hook-form";
import { LuKeyRound, LuAlertCircle } from "react-icons/lu";
import { useForgot } from "./useForgot";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { sendEmail, isLoading } = useForgot();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-100">
      <div className="max-w-md rounded-xl border border-gray-200 bg-stone-50 shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500">
              <LuKeyRound className="h-6 w-6" />
            </div>
            <h1 className="block text-2xl font-bold text-gray-800">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't worry we'll send you reset instructions.
            </p>
          </div>

          <div className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-600 font-semibold"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      placeholder="your@email.com"
                      type="email"
                      id="email"
                      name="email"
                      disabled={isLoading}
                      className="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm text-stone-950 font-semibold outline-none ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
                      aria-describedby="email-error"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please, enter your email!",
                        },
                        validate: (email) => {
                          const regex =
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
                          const checkEMail = regex.test(email);
                          if (!checkEMail)
                            return "Valid email address required for the account recovery process";
                        },
                      })}
                    />

                    {errors?.email?.message && (
                      <>
                        <div className="pointer-events-none absolute top-3 right-0 hidden items-center px-3 peer-invalid:flex">
                          <LuAlertCircle className="h-5 w-5 text-rose-500" />
                        </div>
                        <p
                          className="mt-2 hidden text-xs text-rose-600 peer-invalid:block"
                          id="email-error"
                        >
                          {errors?.email?.message}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="my-2 flex justify-end">
                    <Link
                      to="/login"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Remember your password?
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-800 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-800/80 disabled:text-white disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending email..." : "Reset password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
