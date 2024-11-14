import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "../../models";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

export const CustomInput = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="form__group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form__control ${error ? "is__invalid" : ""}`}
          />
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};
