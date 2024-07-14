import React from "react";
import { Input, Radio, Select, Option } from "@material-tailwind/react";

const RenderField = ({ field, errors }) => {
  const {
    name,
    label,
    type,
    options,
    placeholder,
    onChange,
    onBlur,
    value,
    ref,
  } = field;

  switch (type) {
    case "text":
    case "email":
    case "tel":
    case "date":
      return (
        <div className="py-3">
          <Input
            label={label}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
          />
          {errors[name] && (
            <span className="text-red-400">{errors[name].message}</span>
          )}
        </div>
      );

    case "radio":
      return (
        <div className="py-3">
          <label className="block mb-2">{label}</label>
          {options?.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <Radio
                id={`${name}-${option.value}`}
                name={name}
                label={option.label}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                onBlur={onBlur}
              />
            </div>
          ))}
          {errors[name] && (
            <span className="text-red-400">{errors[name].message}</span>
          )}
        </div>
      );

    case "select":
      return (
        <div className="py-3">
          <Select
            label={label}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          >
            {options?.map((option, index) => (
              <Option key={index} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
          {errors[name] && (
            <span className="text-red-400">{errors[name].message}</span>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default RenderField;
