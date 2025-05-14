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

// Contact Us Form Validator
export const contactUsSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup
    .string()
    .required("Subject is required")
    .min(5, "Subject must be at least 5 characters long"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"),
});
