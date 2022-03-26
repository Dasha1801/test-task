import * as Yup from "yup";

export const validate = Yup.object({
  name: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string().required(),
  street: Yup.string().required(),
  city: Yup.string().required(),
  zipcode: Yup.string().required(),
  phone: Yup.string().required(),
  website: Yup.string().required(),
});
