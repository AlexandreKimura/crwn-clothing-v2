import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Group, Input } from "./styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
