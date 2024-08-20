import { useForm } from "react-hook-form";
import { PasswordFields } from "./FormUser";
import { useUpdatePassword } from "./useUpdatePassword";
import SpinnerMini from "../../ui/SpinnerMini";

function PasswordInformation() {
  const { updatePassword, isLoading } = useUpdatePassword();
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    updatePassword(data);
  }

  return (
    <div className="bg-stone-200 px-8 py-10 flex flex-col gap-y-6 md:rounded-lg lg:pt-12">
      <div>
        <h2 className="text-2xl text-stone-900 font-bold">Password</h2>
        <p className="text-neutral-500">
          Update your password associated with your account.
        </p>
      </div>

      <form
        className="px-6 flex flex-col gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PasswordFields
          register={register}
          errors={errors}
          getValues={getValues}
        />
        <div className="w-full flex justify-start">
          <button
            disabled={isLoading}
            className="w-full max-w-48 rounded-lg bg-stone-800 py-2 text-stone-200 hover:bg-stone-950 hover:text-stone-50 transition-all duration-200 disabled:bg-stone-800/70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <SpinnerMini className="mx-auto text-white" />
            ) : (
              "Change Password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordInformation;
