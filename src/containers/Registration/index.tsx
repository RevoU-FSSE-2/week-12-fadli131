import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button } from 'antd';
import * as Yup from 'yup';

const Registration = ({ onLogin }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is Required'),
    password: Yup.string().required('Password is Required'),
  });

  const handleSubmit = (values) => {
    onLogin(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="username"
            as={Input}
            placeholder="Username"
          />
          <Field
            type="password"
            name="password"
            as={Input}
            placeholder="Password"
          />
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;