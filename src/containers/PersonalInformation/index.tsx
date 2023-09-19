import React from 'react';
import { Text } from '../../component';
import { Input, DatePicker } from 'antd'; 
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import './index.css';

interface PersonalInfo {
  name: string;
  email: string;
  dateOfBirth: string; 
}

const initialValues: PersonalInfo = {
  name: '',
  email: '',
  dateOfBirth: '', 
};

const validationSchema = yup.object({
  name: yup.string().required('Please Enter Your Full Name'),
  email: yup.string().email('Invalid Email!').required('Please Enter Your Email'),
  dateOfBirth: yup
    .string()
    .nullable() 
    .required('Please enter your Date of Birth')
    .test('is-over-17', 'You must be at least 18 years old', function (value) {
      if (!value) return false; 
      const today = moment();
      const birthDate = moment(value);
      return today.diff(birthDate, 'years') >= 18;
    }),
});

const PersonalInformation: React.FC = () => {
  const handleSubmit = (values: PersonalInfo) => {
    console.log(values);
    const formattedDateOfBirth = moment(values.dateOfBirth, 'DD-MM-YY').format('YYYY-MM-DD');
    const updatedValues = { ...values, dateOfBirth: formattedDateOfBirth };
    console.log(updatedValues);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div>
      <div className="personal-information-header">
        <Text content="Full Name" />
        <Input
          name="name"
          placeholder="Please Input Your Name"
          autoComplete="name"
          value={formik.values.name}
          onChange={formik.handleChange('name')}
          status={formik.errors.name && 'error'}
        />
        {formik.errors.name && (
          <>
            <Text content="error:" />
            {formik.errors.name}
          </>
        )}
      </div>
      <div>
        <Text content="Email" />
        <Input
          name="email"
          placeholder="Please Input Your Email.."
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          status={formik.errors.email && 'error'}
        />
        {formik.errors.email && (
          <>
            <Text content="error:" />
            {formik.errors.email}
          </>
        )}
      </div>
      <div>
        <Text content="Date of Birth" />
        <DatePicker 
          name="dateOfBirth"
          placeholder="Please Input Your Birthdate.."
          format="DD-MM-YY"
          value={moment(formik.values.dateOfBirth, 'YYYY-MM-DD')} 
          onChange={(date) => {
            formik.setFieldValue('dateOfBirth', date.format('DD-MM-YY')); 
          }}
          disabledDate={(current) =>
            current && current > moment().subtract(18, 'years')
          }
        />
        {formik.errors.dateOfBirth && (
          <>
            <Text content="error:" /> {formik.errors.dateOfBirth}
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;