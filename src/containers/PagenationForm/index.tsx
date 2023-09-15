import React, { useState } from 'react';
import { Button } from 'antd';

const PagenationForm = ({ children, onBack, onNext, onSubmit, step, totalSteps }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };

  const handleSubmission = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div>
      <div>{children}</div>
      <div>
        {step > 1 && <Button onClick={handleBack}>Kembali</Button>}
        {step < totalSteps ? (
          <Button type="primary" onClick={handleNext}>
            Berikutnya
          </Button>
        ) : (
          <Button type="primary" onClick={handleSubmission}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default PagenationForm;