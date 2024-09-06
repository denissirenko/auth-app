import * as Form from "@radix-ui/react-form";
import { TextField } from "@radix-ui/themes";
import { FieldError } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
  register: any;
  error?: FieldError;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  register,
  error,
}) => (
  <Form.Field name={name} className="mb-4">
    <Form.Label className="block mb-2 text-sm font-medium" htmlFor={name}>
      {label}
    </Form.Label>
    <TextField.Root
      id={name}
      {...register(name)}
      type={type}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && (
      <Form.Message className="text-red-500 text-sm mt-1">
        {error.message}
      </Form.Message>
    )}
  </Form.Field>
);

export default FormField;
