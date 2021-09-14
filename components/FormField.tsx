import React from "react";
import { TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      {...register(name)}
      name={name}
      className="mb-20"
      size="small"
      label={label}
      variant="outlined"
      helperText={errors[name]?.message}
      error={!!errors[name]}
      fullWidth
    />
  );
};
