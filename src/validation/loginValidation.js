export const loginValidation = (values={}) => {

  let isValid=true;
  const error = {};
  const { email, password } = values;

  if (email.trim().length === 0) {
    error.email = "*Email should not be empty";
    isValid=false;
  }

  if (password.trim().length === 0) {
    error.password = "*Password should not be empty";
    isValid=false;
  }

  return {error, isValid};
};
