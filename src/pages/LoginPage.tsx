import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { NavLink } from "react-router-dom";

const LoginSchema = object({
  email: string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-content h-content flex flex-col items-center border-2 rounded-lg px-8 py-5 mt-24"
    >
      <img
        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1703311427~exp=1703312027~hmac=45f6bb61af90f8b812e741e5538842d50f2b2a2e9ab2f79faf40e615888449de"
        alt="Known User"
        className="w-24 h-24 rounded-full border-2 "
      />

      <h1 className="my-2 font-bold text-2xl text-blue-800">Welcome, Log In</h1>
      <div className="flex flex-col">
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
      <div className="flex flex-col">
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
      <Button type="submit" text="Log In" />
      <p className="mt-2">
        Don't have account yet,&nbsp;
        <NavLink to="/signup" className="text-sm text-blue-500 underline">
          Sign Up
        </NavLink>
      </p>
    </form>
  );
};

export default LoginPage;
