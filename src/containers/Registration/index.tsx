import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button } from 'antd';
import * as Yup from 'yup';
import PagenationForm from '../PagenationForm';

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
    <PagenationForm onNext={onLogin} step={3} totalSteps={3}>
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
          </Form>
        )}
      </Formik>
    </PagenationForm>
  );
};

export default Registration;