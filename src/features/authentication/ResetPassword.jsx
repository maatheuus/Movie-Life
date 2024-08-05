import { useForm } from "react-hook-form";
import { LuAlertCircle, LuMailOpen } from "react-icons/lu";
import { useSendToken } from "./useSendToken";

function ResetPassword() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { sendToken, isLoading } = useSendToken();

  function onSubmit(token) {
    sendToken(token);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-100">
      <div className="max-w-md rounded-xl border border-gray-200 bg-stone-50 shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500">
              <LuMailOpen className="h-6 w-6" />
            </div>
            <h1 className="block text-2xl font-bold text-gray-800">
              Password reset
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              We send a token for your email, please verify and paste here.
            </p>
          </div>

          <div className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="token"
                      name="token"
                      disabled={isLoading}
                      className="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm text-stone-950 font-semibold outline-none ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
                      aria-describedby="email-error"
                      {...register("token")}
                    />

                    {errors?.token?.message && (
                      <>
                        <div className="pointer-events-none absolute top-3 right-0 hidden items-center px-3 peer-invalid:flex">
                          <LuAlertCircle className="h-5 w-5 text-rose-500" />
                        </div>
                        <p
                          className="mt-2 hidden text-xs text-rose-600 peer-invalid:block"
                          id="email-error"
                        >
                          {errors?.token?.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-800 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
                >
                  {isLoading ? "Send token..." : "Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
