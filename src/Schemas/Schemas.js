import * as Yup from "yup";

export const personalInfoSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  // linkedin: Yup.string().url("Enter a valid URL"),
  // github: Yup.string().url("Enter a valid URL"),
});

export const summarySchema = Yup.object({
  summary: Yup.string()
    .required("Professional Summary is required")
    .min(50, "Summary should be at least 50 characters"),
});
