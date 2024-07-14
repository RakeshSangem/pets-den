import { Button } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import formConfig from "../../formConfig.json";
import RenderField from "./RenderField";

const Form = ({ onSubmit, defaultValues }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formConfig.map((field, index) => (
        <Controller
          key={index}
          name={field.name}
          defaultValue={undefined}
          control={control}
          rules={field.validation}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <RenderField
              field={{ ...field, onChange, onBlur, value, name, ref }}
              errors={errors}
            />
          )}
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
