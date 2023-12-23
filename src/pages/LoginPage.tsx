import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Link } from "react-router-dom";

const LoginSchema = object({
  email: string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: string().required("Password is required").min(6, "Password must be at least 6 characters"),
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
    <form onSubmit={onSubmit} className="w-content h-content flex flex-col items-center border-2 rounded-lg px-8 py-5">
      <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1703296468~exp=1703297068~hmac=a3aa026a8b9e136d8c6ed00f119fef9963d59d8f203a5d7dd2433e5be6f7b91f" alt="Known User" className="w-24 h-24 rounded-full border-2 " />
      <div className="flex flex-col">
        <Input
          type="email"
          placeholder="Enter your email address..."
          {...register("email")}
        />
        {errors.email && <span className="text-red-500 mt-1 text-sm">{errors.email.message}</span>}
      </div>
      <div className="flex flex-col">
        <Input
          type="password"
          placeholder="Enter your password..."
          {...register("password")}
        />
        {errors.password && <span className="text-red-500 mt-1 text-sm">{errors.password.message}</span>}
      </div>
      <Button type="submit" text="Sign In" />
      <p className="mt-2">
        Don't have account yet, <Link className="text-sm text-blue-500 underline" to="/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginPage;
