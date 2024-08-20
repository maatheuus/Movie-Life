import { useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";
import { FormUser } from "./FormUser";
import { useUpdate } from "./useUpdate";

function BasicInformation({ user }) {
  const { update, isLoading } = useUpdate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

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

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        <FormUser
          register={register}
          errors={errors}
          disabled={isLoading}
          user={user}
        />

        <div className="w-full flex justify-start">
          <button
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
