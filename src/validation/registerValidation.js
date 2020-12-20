import validator from "validator";

let error = {};
export const registerValidation = (values) => {
  const { email, displayName, password, confirmPassword } = values;
  let isValid = true;

  if (email.trim().length === 0 || !validator.isEmail(email)) {
    error = {
      ...error,
      email: "Email is not valid",
    };
    isValid = false;
  }

  if (displayName.trim().length === 0) {
    error = {
      ...error,
      displayName: "Name is required",
    };
    isValid = false;
  }

  if (password.length < 8) {
    error = {
      ...error,
      password: "Password should be at least 8 characters",
    };
    isValid = false;
  }

  if (password !== confirmPassword) {
    error = {
      ...error,
      confirmPassword: "Passwords should match each other",
    };
    isValid = false;
  }

  return {
    isValid,
    error,
  };
};
