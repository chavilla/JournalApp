import validator from "validator";

export const registerValidation = (values={}) => {

  const error = {};
  const { email, displayName, password, confirmPassword } = values;

  if (!validator.isEmail(email)) {
    error.email = "Email is not valid";
  }
  if (displayName.trim().length === 0) {
    error.displayName = "Name is required";
  }
  if (password.length < 8) {
    error.password = "Password should be at least 8 characters";
  }
  if (password !== confirmPassword) {
    error.confirmPassword = "Passwords should match each other";
  }

  return error;
};
