import React, { useState } from 'react';
import { ErrorText, Text, State, Address, ZipCode, Password } from '../../component';
import { Input, Space, Button, DatePicker } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
import moment from 'moment';


interface RegistrationInfo {
  name: string;
  email: string;
  dateOfBirth: string;

  address: string,
  state: string,
  city: string,
  zipcode: number

  username: string;
  password: string;
}

const initialValues = {
  name: '',
  email: '',
  dateOfBirth: '',

  address: '',
  state: '',
  city: '',
  zipcode: 0,

  username: '',
  password: ''
}

const validationSchema = yup.object({
  name: yup.string().required('Please Enter Your Full Name'),
  email: yup.string().email('Invalid Email!').required('Please Enter Your Email'),
  dateOfBirth: yup.string().matches(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{2}$/,
      'Invalid date format! (dd-mm-yy)')
    .required('Please enter your Date of Birth (dd-mm-yy)'),

  address: yup.string().required('Please Enter Your Street Address'),
  state: yup.string().required('Please Select Your State'),
  city: yup.string().required('Please Select Your City'),
  zipcode: yup.number().required('Please Enter your Zip Code'),

  username: yup.string().required('Please Enter Your Username'),
  password: yup.string().required('Please Select Your Password'),

})

const Registration: React.FC = () => {

  const handleSubmit = (values: RegistrationInfo) => {
    console.log(values)
  }

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema
  })

  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if(step === 1 || step === 2) {
        setStep((prevStep) => prevStep+1);
    }

    return
  }

  const handlePrev = () => {
    if(step === 2 || step === 3) {
        setStep((prevStep) => prevStep - 1);
    }

    return
  }

    return (
      <form onSubmit={formMik.handleSubmit}>
        {step === 1 && (
          <div>   
            <span><Text content="Personal Information" /> </span>   
            <div >
              <Text content="Full Name" />
              <Input name="name" placeholder="Please Input Your Name" autoComplete="name" 
              value={formMik.values.name} 
              onChange={formMik.handleChange('name')}
              status={formMik.errors.name && 'error'}/>
            
              {formMik.errors.name && (
                <>
                <span><ErrorText /> {formMik.errors.name}</span>

                </>
              )}

            </div>
            <div>
              <Text content="Email" />
              <Input name="email" placeholder="Please Input Your Email.." autoComplete="email" 
              value={formMik.values.email} 
              onChange={formMik.handleChange('email')}
              status={formMik.errors.email && 'error'} />

              {formMik.errors.email && (
                <>
                  <span><ErrorText /> {formMik.errors.email}</span>
                </>
              )}
            </div>
            <div>
            <Text content="Tanggal Lahir [dd-mm-yy]" />
            <DatePicker
              name="dateOfBirth"
              placeholder="Silakan Masukkan Tanggal Lahir Anda [dd-mm-yy].."
              format="DD-MM-YY"
              value={formMik.values.dateOfBirth}
              onChange={(date) => {
                formMik.setFieldValue('dateOfBirth', date);
              }}
              disabledDate={(current) =>
                current && current > moment().subtract(18, 'years')
              }
            />

            {formMik.errors.dateOfBirth && (
              <>
                <span>
                  <ErrorText /> {formMik.errors.dateOfBirth}
                </span>
              </>
            )}
          </div>
        </div>
      )}

        {step === 2 && (
          <div>
            <span><Text content="Address Information" /></span>
            <div>  
              <Text content="Address" />
              <Address placeholder="Please Input Your Address" autoComplete='street-address'
              value={formMik.values.address} 
              onChange={formMik.handleChange('address')}
              status={formMik.errors.address && 'error'} />

              {formMik.errors.address && (
                <>
                  <span><ErrorText /> {formMik.errors.address}</span>
                </>
              )}
            </div>

          <div>
            <Text content="State" />
            <State 
            value={formMik.values.state} 
            onChange={formMik.handleChange('state')}
            status={formMik.errors.state && 'error'} />

            {formMik.errors.state && (
              <>
                <span><ErrorText /> {formMik.errors.state}</span>
              </>
            )}
          </div>

          <div>
            <Text content="City" />
            <Input name="city" placeholder="Please Input Your City" autoComplete='address-level2'
            value={formMik.values.city} 
            onChange={formMik.handleChange('city')}
            status={formMik.errors.city && 'error'}/>

            {formMik.errors.city && (
              <>
                <span><ErrorText /> {formMik.errors.city}</span>
              </>
            )}
          </div>  
          <div>
            <Text content="Zip Code" />
            <ZipCode placeholder="Zip Code.." autoComplete='postal-code'
            value={formMik.values.zipcode}
            onChange={(value) => {
              formMik.handleChange('zipcode')(String(value));
            }}
            status={formMik.errors.zipcode && 'error'}/>
            
            {formMik.errors.zipcode && (
              <>
                <span><ErrorText /> {formMik.errors.zipcode}</span>
              </>
            )}
          </div>
        </div>
        )}

        {step === 3 && (
          <div>
            <span></span>
            <div>
              <Text content="Username" />
              <Input name="username" placeholder="Username.." autoComplete='username'            
              value={formMik.values.username} 
              onChange={formMik.handleChange('username')}
              status={formMik.errors.username && 'error'}/>
                
              {formMik.errors.username && (
                <>
                  <span><ErrorText />{formMik.errors.username}</span>
                </>
              )}
            </div>

            <div>
              <Text content="password" />
              <Password 
              value={formMik.values.password} 
              onChange={formMik.handleChange('password')}
              status={formMik.errors.password && 'error'}/>

              {formMik.errors.password && (
                <>
                  <span><ErrorText />{formMik.errors.password}</span>
                </>
              )}
            </div>
          </div>
        )}

        <Space direction="vertical">
          <Space wrap>

          {step === 1 && (
              <div>
                 <Button type="primary" 
                onClick={() => {
                if (!formMik.values.name) {
                  formMik.setFieldError('name', 'Please Input  Your Name');
                } if (!formMik.values.email) {
                  formMik.setFieldError('email', 'Please Input Your Email');
                } if (!formMik.values.dateOfBirth) {
                  formMik.setFieldError('dateOfBirth', 'Please Input Your Birthdate [dd-mm-yy]');
                  return;
                } else {
                  handleNext();
                }
              }} >
                Next
                </Button>
              </div>
            )}

            {step === 2 && (
              <div>
                <Button onClick={handlePrev} >Previous</Button>
                <Button type="primary" 
                onClick={() => {
                if (!formMik.values.address) {
                  formMik.setFieldError('address', 'Please enter your Address');
                } if (!formMik.values.state){
                  formMik.setFieldError('state', 'Please enter your State');
                } if (!formMik.values.city){
                  formMik.setFieldError('city', 'Please enter your City');
                } if (formMik.values.zipcode === 0){
                  formMik.setFieldError('zipcode', 'Please enter your Zip Code');
                  return;
                } else {
                  handleNext();
                }
              }} >
              Next
              </Button>
              </div>
            )}

            {step === 3 && (
              <div>
                <Button onClick={handlePrev}>Previous</Button>
                <Button htmlType='submit' type="primary" 
                onClick={() => {
                if (!formMik.values.username) {
                  formMik.setFieldError('username', 'Please enter your Username');
                } if (!formMik.values.password) {
                  formMik.setFieldError('password', 'Please enter your Password');
                  return;
                } 
              }} >
                Submit
                </Button>
              </div>

            )}

          </Space>
        </Space>
      </form>
    )
}

export default Registration