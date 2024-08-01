import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LayoutAuth from "./LayoutAuth";
import { useForm } from "react-hook-form";
import FormAuth from "./FormAuth";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function Login() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { isLoading, login } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  return (
    <LayoutAuth title="Sign in to access your account">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 mt-4"
      >
        <FormAuth
          register={register}
          errors={errors}
          login
          disable={isLoading}
        />

        <div className="mt-6">
          <Button
            className="w-full !py-3 !bg-[#2332a4f6] disabled:!bg-[#2332a46a] disabled:cursor-not-allowed"
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? <SpinnerMini className="text-white" /> : "Sign in"}
          </Button>

          <div className="mt-6 text-center ">
            {!isLoading && (
              <Link
                to="/signup"
                className="text-sm text-blue-500 hover:underline"
              >
                Don't have an account?
              </Link>
            )}
          </div>
        </div>
      </form>
    </LayoutAuth>
  );
}

export default Login;
