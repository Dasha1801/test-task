import React from "react";
import { Form, Formik } from "formik";
import Input from "./input/input";
import styles from "./formProfile.module.scss";
import { useSelector } from "react-redux";
import { TStore } from "../../redux";
import Textarea from "./textarea/textarea";
import { IPropsForm } from "../shared/interfaces";
import BaseBtn from "../shared/baseBtn/baseBtn";

function FormProfile({ isReadOnly }: IPropsForm): JSX.Element {
  const { name, email, username, phone, address, website } = useSelector(
    (state: TStore) => state.profile
  ).profile;

  return (
    <Formik
      initialValues={{
        name,
        email,
        username,
        street: address.street,
        city: address.city,
        zipcode: address.zipcode,
        phone,
        website,
        comment: "",
      }}
      onSubmit={(values) => {
        console.log(JSON.stringify(values));
      }}
    >
      {(formik) => (
        <Form className={styles.form}>
          <div className={styles.fields}>
            <Input label="Name" name="name" readOnly={isReadOnly} />
            <Input label="User name" name="username" readOnly={isReadOnly} />
            <Input label="E-mail" name="email" readOnly={isReadOnly} />
            <Input label="Street" name="street" readOnly={isReadOnly} />
            <Input label="City" name="city" readOnly={isReadOnly} />
            <Input label="Zip code" name="zipcode" readOnly={isReadOnly} />
            <Input label="Phone" name="phone" readOnly={isReadOnly} />
            <Input label="WebSite" name="website" readOnly={isReadOnly} />
            <Textarea label="Comment" name="comment" readOnly={isReadOnly} />
          </div>
          <BaseBtn
            text="Отправить"
            background={isReadOnly ? "#afafaf" : "#52cf4f"}
            disabled={isReadOnly}
          />
        </Form>
      )}
    </Formik>
  );
}
export default FormProfile;
