import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log(values);
    }
  }, [errors]);
  return { handleChange, values, errors, handleSubmit };
};

export default useForm;
