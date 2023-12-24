import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from "react";
import { CheckoutFormData } from "../models/CheckoutFormData";

const schema = object().shape({
  fullName: string().required('Full Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  address: string().required('Address is required'),
  paymentMethod: string().required('Payment Method is required'),
});

const CheckoutPage = () => {

  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit =  handleSubmit((data:CheckoutFormData)=>{
    setSuccess(true)
    console.log(data, "Checkout Successfully")
    reset();
  })

  return (
    <div className="w-3/4 p-4 bg-white rounded">
      <h2 className="text-xl font-semibold mb-4">Please Fill Checkout Details</h2>
      <form onSubmit={onSubmit}>
        <div className="flex justify-between gap-3 w-full">
        <div className="mb-4 w-1/2">
          <label className="block text-sm font-medium text-gray-600">Full Name:</label>
          <Input type="text" classname="mt-1 p-2 border rounded w-full outline-none" {...register('fullName')} />
          <p className="text-red-500 text-sm mt-1">{errors.fullName?.message}</p>
        </div>

        <div className="mb-4 w-1/2">
          <label className="block text-sm font-medium text-gray-600">Email:</label>
          <Input type="email" classname="mt-1 p-2 border rounded w-full outline-none" {...register('email')} />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Address:</label>
          <textarea {...register('address')} className="mt-1 p-2 border-b-2 border rounded w-full outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.address?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Payment Method:</label>
          <select {...register('paymentMethod')} className="mt-1 p-2 border rounded w-full outline-none">
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <p className="text-red-500 text-sm mt-1">{errors.paymentMethod?.message}</p>
        </div>
        <Button
          type="submit"
          text={success ? "Order Placed Successfully✅" : "Place Order"}
        />

      </form>
    </div>
  );
};

export default CheckoutPage;
