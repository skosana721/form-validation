import React from "react";
import useForm from "./useForm";
import { validateInfo } from "./validateInfo";

const FormSignUp = ({ greet }) => {
  const { handleChange, values, errors, handleSubmit } = useForm(validateInfo);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>
          Get started with us today! Create you account by filling the
          information below.
        </h1>
        <div>
          <input
            type="text"
            onChange={handleChange}
            value={values.username}
            name="username"
            placeholder="Enter your name"
          />
          {errors.username && <p>{errors.username}</p>}
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={values.email}
            placeholder="Enter your email"
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="password"
            onChange={handleChange}
            value={values.password}
            name="password"
            placeholder="Enter your password"
          />
          {errors.password && <p>{errors.password}</p>}
          <input
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={values.confirmPassword}
            placeholder="Confirm password"
          />
          {errors.confirm && <p>{errors.confirm}</p>}
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
