import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSignup } from "./useSignup";
import FormAuth from "./FormAuth";
import LayoutAuth from "./LayoutAuth";
import SpinnerMini from "../../ui/SpinnerMini";

function SignUp() {
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { isLoading, signup } = useSignup();

  function onSubmit(data) {
    signup(data);
  }

  return (
    <LayoutAuth title="Sign up to save some movies">
      <form
        className="w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormAuth
          name
          confirmPassword
          disable={isLoading}
          errors={errors}
          register={register}
          getValues={getValues}
        />

        <div className="mt-6">
          <Button
            className="w-full !py-3 !bg-[#2332a4f6] disabled:!bg-[#2332a46a] disabled:cursor-not-allowed"
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? <SpinnerMini className="text-white" /> : "Sign Up"}
          </Button>

          <div className="mt-6 text-center ">
            {!isLoading && (
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline"
              >
                Already have an account?
              </Link>
            )}
          </div>
        </div>
      </form>
    </LayoutAuth>
  );
}

export default SignUp;
