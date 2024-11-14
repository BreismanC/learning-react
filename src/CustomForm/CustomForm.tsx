import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { FormValues, schema } from "../models";
import { CustomInput } from "../components";

import "./customForm.css";

export const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        name="name"
        label="Name"
        control={control}
        type="text"
        error={errors.name}
      />
      <CustomInput
        name="email"
        label="Email"
        control={control}
        type="email"
        error={errors.email}
      />
      <CustomInput
        name="password"
        label="Password"
        control={control}
        type="password"
        error={errors.password}
      />
      <CustomInput
        name="confirmPassword"
        label="ConfirmPassword"
        control={control}
        type="password"
        error={errors.confirmPassword}
      />
      <button className="form__submit" type="submit">
        Submit
      </button>
    </form>
  );
};
