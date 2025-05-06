import * as yup from "yup";

export const SignInSchema = yup
  .object({
    email: yup.string().required().email("invalid email format"),
    username: yup.string().required("username is required"),
    password: yup
      .string()
      .required("password cannot be empty")
      .min(6, "min lenght of password should be atleast 6 chrs"),
    confirmPwd: yup
      .string()
      .required("confirm password cannot be empty")
      .min(6, "min lenght of password should be atleast 6 chrs")
      .oneOf([yup.ref("password")], "password do not match"),
  })
  .required();

export const LoginSchema = yup
  .object({
    email: yup.string().required().email("inalide email format"),
    password: yup
      .string()
      .required("password cannot be empty")
      .min(6, "min lenght of password should be atleast 6 chrs"),
  })
  .required();

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});
export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("password cannot be empty")
    .min(6, "min lenght of password should be atleast 6 chrs"),
  confirmPwd: yup
    .string()
    .required("confirm password cannot be empty")
    .min(6, "min lenght of password should be atleast 6 chrs")
    .oneOf([yup.ref("password")], "password do not match"),
});
