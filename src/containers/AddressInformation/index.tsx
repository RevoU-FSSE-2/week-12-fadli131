import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button } from 'antd';
import * as Yup from 'yup';
import PagenationForm from '../PagenationForm';

const AddressInformation = ({ onNext }) => {
  const initialValues = {
    StreetAddress: '',
    City: '',
    State: '',
    zipCode: '', 
  };

  const validationSchema = Yup.object().shape({
    StreetAddress: Yup.string().required('Street Address is required'),
    City: Yup.string().required('City is required'),
    State: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip Code is required'), 
  });

  const handleSubmit = (values) => {
    onNext(values);
  };

  return (
    <PagenationForm onNext={onNext} step={2} totalSteps={3}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="StreetAddress"
            as={Input}
            placeholder="Street Address"
          />
          <Field
            type="text"
            name="City"
            as={Input}
            placeholder="City"
          />
          <Field
            type="text"
            name="State"
            as={Input}
            placeholder="State"
          />
          <Field
            type="text"
            name="zipCode"
            as={Input}
            placeholder="Kode Pos"
          />
        </Form>
      )}
    </Formik>
  </PagenationForm>
  );
};

export default AddressInformation;




