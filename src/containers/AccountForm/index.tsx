import React, { useState } from 'react';
import { Password, Text } from '../../component'
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

interface AccountForm {
  username: string;
  password: string;
}

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object({
  username: yup.string().required('Please Enter Your Username'),
  password: yup.string().required('Please Select Your Password'),
})


const AccountForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const handlePrev = () => {
    if(step === 2 || step === 3) {
        setStep((prevStep) => prevStep - 1);
    }

    return
  }

  const handleSubmit = (values: AccountForm) => {
    console.log(values)
  }

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema
  })

  return (
    <>
    <div>
      <Text content="Username" />
        <Input name="username" placeholder="Username.." autoComplete='username'            
        value={formMik.values.username} 
        onChange={formMik.handleChange('username')}
        status={formMik.errors.username && 'error'}/>
           
        {formMik.errors.username && (
          <>
            <Text content='error:'/>{formMik.errors.username}
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
          <Text content='error:'/> {formMik.errors.password}
        </>
      )}
    </div>

      {step === 3 && (
        <div>
          <Button onClick={handlePrev}>Previous</Button>
          <Button htmlType={'submit'}>Submit </Button>
        </div>

      )}
    </>
  )

};

export default AccountForm;