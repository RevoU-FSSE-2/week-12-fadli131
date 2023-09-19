import React from 'react';
import { Input } from 'antd';

interface Props {
  value: string;
  onChange: (e: string | React.ChangeEvent) => void
  status: "" | "error" | "warning" | undefined
}

const State: React.FC<Props> = ({ value, onChange, status }) => {
    return (
      <>
        <Input
          placeholder="Please enter your State"
          value={value}
          onChange={onChange}
          status={status} 
        />
      </>
    );
  };
  
  export default State;