import { FieldHookConfig, useField } from "formik";
import React from "react";
import { ITextField } from "../../shared/interfaces";
import styles from "./input.module.scss";

function Input({
  label,
  readOnly,
  ...props
}: ITextField & FieldHookConfig<string>): JSX.Element {
  const [field] = useField(props);

  return (
    <div className={styles.wrapperLabel}>
      <label htmlFor={props.name} className={styles.label}>
        {label}
        <input
          className={styles.input}
          {...field}
          readOnly={readOnly}
          style={{
            color: readOnly ? "#0000004d" : "#000",
            border: field.value ? "1px solid #d8d8d8" : "1px solid #d91313",
          }}
        />
      </label>
    </div>
  );
}

export default Input;
