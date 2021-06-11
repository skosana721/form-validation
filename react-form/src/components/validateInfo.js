export const validateInfo = (values) => {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = `Username is required`;
  }
  if (!values.email) {
    errors.email = `Email is required`;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = `Email is invalid`;
  }
  if (!values.password) {
    errors.password = `Password is required`;
  } else if (values.password.length < 6) {
    errors.password = `Enter a password with 6 or more characters`;
  }
  if (!values.confirmPassword) {
    errors.confirm = `Confirm password is required`;
  } else if (values.confirmPassword !== values.password) {
    errors.confirm = `Password don't match`;
  }
  return errors;
};
