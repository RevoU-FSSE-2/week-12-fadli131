import React from 'react';
import { InputNumber } from 'antd';

interface Props {
  placeholder: string;
  autoComplete: string;
  value: number;
  onChange: (value: number | null) => void
  status: "" | "error" | "warning" | undefined
}

const ZipCode: React.FC<Props> = ({ placeholder, autoComplete, value, onChange, status }) => 
<InputNumber minLength={5} maxLength={5} name="zipcode" placeholder={placeholder} autoComplete={autoComplete} value={value} onChange={onChange} status={status} />;

export default ZipCode;