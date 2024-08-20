import { Link } from "react-router-dom";

function FormReset(props) {
  const {
    register,
    getValues,
    errors,
    isNewPass,
    isResetPass,
    isForgotPass,
    isLoading,
  } = props;
  return (
    <>
      {isForgotPass && (
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

            <p
              className="mt-2 text-xs text-rose-600 peer-invalid:block"
              id="email-error"
            >
              {errors?.email?.message}
            </p>
          </div>
          <div className="my-2 flex justify-end">
            <Link to="/login" className="text-sm text-blue-500 hover:underline">
              Remember your password?
            </Link>
          </div>
        </div>
      )}
      {isNewPass && (
        <>
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
        </>
      )}
      {isResetPass && (
        <div>
          <div className="relative">
            <input
              type="text"
              id="token"
              name="token"
              disabled={isLoading}
              className="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm text-stone-950 font-semibold outline-none ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
              aria-describedby="email-error"
              {...register("token", {
                required: {
                  value: true,
                  message: "The token is required!",
                },
              })}
            />
            <p
              className="mt-2 text-xs text-rose-600 peer-invalid:block"
              id="email-error"
            >
              {errors?.token?.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default FormReset;
