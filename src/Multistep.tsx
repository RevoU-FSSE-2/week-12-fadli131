import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import AddressInformation from './AddressInformation';
import Registration from './Registration';

const MultistepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (values) => {
    setFormData({ ...formData, ...values });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  
  return (
    <div>
      {step === 1 && (
        <PersonalInformation onNext={nextStep} />
      )}
      {step === 2 && (
        <AddressInformation onNext={nextStep} />
      )}
      {step === 3 && (
        <Registration onLogin={handleLogin} />
      )}
      {step > 1 && (
        <button onClick={prevStep}>Kembali</button>
      )}
    </div>
  );
};

export default MultistepForm;