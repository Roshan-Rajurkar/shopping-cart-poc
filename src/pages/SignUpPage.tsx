import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SignupSchema = object({
  username: string().required("Username is required").min(6),
  email: string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignUpPage = () => {

const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = handleSubmit((data) => {
    if(data)
    {
      setSuccess(true);
      reset();
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-content h-content flex flex-col items-center border-2 rounded-lg px-8 py-5 mt-8"
    >
      <img
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1703311448~exp=1703312048~hmac=010cd38ca1a0f67906611ce062f6ddda80f1bde925fa6e74510bf5cd4d9653c9"
        alt="unKnown User"
        className="w-24 h-24 rounded-full border-2 "
      />
      <h1 className="my-2 font-bold text-2xl text-blue-800">
        Welcome, Sign Up
      </h1>
      <div className="flex flex-col flex-wrap flex-shrink">
        <Input
          type="text"
          placeholder="Enter your username..."
          {...register("username")}
          classname={errors.username?.message && "border-red-600"}
        />
        {errors.email && (
          <span className="text-red-500 mt-1 text-sm">
            {errors.username?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-wrap">
        <Input
          type="email"
          placeholder="Enter your email address..."
          {...register("email")}
          classname={errors.email?.message && "border-red-600"}
        />
        {errors.email && (
          <span className="text-red-500 mt-1 text-sm">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-wrap ">
        <Input
          type="password"
          placeholder="Enter your password..."
          {...register("password")}
          classname={errors.password?.message && "border-red-600"}
        />
        {errors.password && (
          <span className="text-red-500 mt-1 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button type="submit" text={success ? "Sign Up Successfully✅" : "Sign Up"} />
      <p className="mt-2">
        Already have an account,&nbsp;
        <NavLink to="/login" className="text-sm text-blue-500 underline">
          Log In
        </NavLink>
      </p>
    </form>
  );
};

export default SignUpPage;
