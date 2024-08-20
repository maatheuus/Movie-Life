import { useForm } from "react-hook-form";
import { KeyRound } from "lucide-react";
import FormReset from "./FormReset";
import LayoutForm from "./LayoutForm";
import { useForgot } from "./useForgot";

function ForgotPassword() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { sendEmail, isLoading } = useForgot();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <LayoutForm
      title="Forgot password?"
      icon={<KeyRound className="h-6 w-6" />}
      text="Don't worry we'll send you reset instructions."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-4">
          <FormReset
            isForgotPass
            register={register}
            errors={errors}
            isLoading={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-800 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-800/80 disabled:text-white disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending email..." : "Reset password"}
          </button>
        </div>
      </form>
    </LayoutForm>
  );
}

export default ForgotPassword;
