import { useForm } from "react-hook-form";
import { MailOpen } from "lucide-react";
import { useSendToken } from "./useSendToken";
import LayoutForm from "./LayoutForm";
import FormReset from "./FormReset";

function ResetPassword() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { sendToken, isLoading } = useSendToken();

  function onSubmit(token) {
    sendToken(token);
  }

  return (
    <LayoutForm
      title="Password reset"
      icon={<MailOpen className="h-6 w-6" />}
      text="We send a token for your email, please verify and paste here."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-4">
          <FormReset
            isResetPass
            register={register}
            errors={errors}
            isLoading={isLoading}
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-800 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
          >
            {isLoading ? "Send token..." : "Continue"}
          </button>
        </div>
      </form>
    </LayoutForm>
  );
}

export default ResetPassword;
