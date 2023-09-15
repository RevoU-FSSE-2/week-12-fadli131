import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Registration, PersonalInformation, AddressInformation } from './containers';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (values) => {
    setStep(step + 1);
    setFormData({ ...formData, ...values });
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Data yang di-submit:', formData);
  };

  return (
    <div className="App">
      <Row justify="center">
        <Col span={12}>
          {step === 1 && (
            <PersonalInformation
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <AddressInformation
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 3 && (
            <Registration
              onLogin={handleSubmit}
              onBack={handleBack}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;