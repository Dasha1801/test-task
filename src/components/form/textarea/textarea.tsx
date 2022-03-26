import React from "react";
import { useField, FieldHookConfig } from "formik";
import { ITextField } from "../../shared/interfaces";
import styles from "./textarea.module.scss";

function Textarea({
  label,
  readOnly,
  ...props
}: ITextField & FieldHookConfig<string>): JSX.Element {
  const [field] = useField(props);

  return (
    <div className={styles.wrapperLabel}>
      <label htmlFor={props.name} className={styles.label}>
        {label}
        <textarea className={styles.textarea} {...field} readOnly={readOnly} />
      </label>
    </div>
  );
}

export default Textarea;
