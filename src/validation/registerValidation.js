import validator from "validator";

export const registerValidation = (values={}) => {

  let isValid=true;
  const error = {};
  const { email, displayName, password, confirmPassword } = values;

  if (!validator.isEmail(email)) {
    error.email = "* Email is not valid";
    isValid=false;
  }
  if (displayName.trim().length === 0) {
    error.displayName = "* Name is required";
    isValid=false;
  }
  if (password.length < 8) {
    error.password = "* Password should be at least 8 characters";
    isValid=false;
  }
  if (password !== confirmPassword) {
    error.confirmPassword = "* Passwords should match each other";
    isValid=false;
  }

  return {error, isValid};
};
