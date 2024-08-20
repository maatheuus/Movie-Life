import { RectangleEllipsis } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormReset from "./FormReset";
import LayoutForm from "./LayoutForm";
import { useGetToken, useResetPassword } from "./useResetPassword";

function NewPassword() {
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { resetPassword, isLoading } = useResetPassword();
  const token = useGetToken();
  const navigate = useNavigate();

  function onSubmit(updatePassword) {
    resetPassword({ token, updatePassword });
  }

  useEffect(() => {
    if (!token) navigate("/forgot");
  }, [token, navigate]);

  return (
    <LayoutForm
      title=" Set new password"
      icon={<RectangleEllipsis className="h-6 w-6" />}
      text="Must be at least 6 characters."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-4">
          <FormReset
            isNewPass
            register={register}
            errors={errors}
            isLoading={isLoading}
            getValues={getValues}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-800 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-500 disabled:cursor-not-allowed"
          >
            {isLoading ? "Updating password..." : "Continue"}
          </button>
        </div>
      </form>
    </LayoutForm>
  );
}

export default NewPassword;
