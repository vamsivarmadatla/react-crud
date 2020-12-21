import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "no password provided";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);
  return (
    <div className="container">
      <div className=" w-50 mx-auto shadow p-5">
        <h1 className="text-center">Sign in to continue</h1>
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="success-msg">Signed in successfully</span>
        )}
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email" 
              id="email"
              required
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email && "input-error"}
            />
            {formErrors.email && (
              < span className="error">{formErrors.email}</span>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={formErrors.password && "input-error"}
            />
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </Form.Group>

          <button className="btn btn-primary ml-3 text-center">Login</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
