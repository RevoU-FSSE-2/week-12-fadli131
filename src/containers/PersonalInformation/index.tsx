import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, DatePicker } from 'antd';
import * as Yup from 'yup';
import PagenationForm from '../PagenationForm';

const PersonalInformation = ({ onNext }) => {
  const initialValues = {
    nama: '',
    email: '',
    tanggallahir: '',
  };

  const validationSchema = Yup.object().shape({
    nama: Yup.string().required('Nama wajib diisi'),
    email: Yup.string().email('Email tidak valid').required('Email wajib diisi'),
    tanggalLahir: Yup.date()
      .required('Tanggal lahir wajib diisi')
      .test('minimum-age', 'Anda harus berumur minimal 17 tahun', function (value) {
        const minimumAge = 17;
        const today = new Date();
        const birthday = new Date(value);
        const age = today.getFullYear() - birthday.getFullYear();
        if (age < minimumAge) {
          return false;
        }
        return true;
      }),
  });

  const handleSubmit = (values) => {
    onNext(values);
  };

  return (
    <PagenationForm onNext={onNext} step={1} totalSteps={3}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="nama"
              as={Input}
              placeholder="Nama Lengkap"
            />
            <Field
              type="email"
              name="email"
              as={Input}
              placeholder="Email"
            />
            <Field
              type="date"
              name="tanggalLahir"
              as={DatePicker}
            />
          </Form>
        )}
      </Formik>
    </PagenationForm>
  );
};

export default PersonalInformation;
