import { Button } from "@mui/material";
import LayoutAuth from "./LayoutAuth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormAuth from "./FormAuth";
import { useState } from "react";

function SignUp() {
  const [profilePhoto, setProfilePhoto] = useState("Profile Photo");
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    setProfilePhoto(data.profilePhoto[0].name);
  }
  console.log(profilePhoto);

  return (
    <LayoutAuth title="Sign up to save some movies">
      <form
        className="w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormAuth
          register={register}
          errors={errors}
          getValues={getValues}
          name
          photo
          confirmPassword
          profilePhoto={profilePhoto}
        />

        <div className="mt-6">
          <Button
            className="w-full !py-3 !bg-[#2332a4f6]"
            type="submit"
            color="primary"
            variant="contained"
          >
            Sign Up
          </Button>

          <div className="mt-6 text-center ">
            <Link to="/login" className="text-sm text-blue-500 hover:underline">
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </LayoutAuth>
  );
}

export default SignUp;
