import React from 'react';
import { Input } from 'antd';

interface Props {
  placeholder: string;
  autoComplete: string;
  value: string;
  onChange: (e: string | React.ChangeEvent) => void
  status: "" | "error" | "warning" | undefined
}
const {TextArea} = Input
const Address: React.FC<Props> = ({ placeholder, autoComplete, value, onChange, status }) => (
    <TextArea rows={4} name="Address" placeholder={placeholder} autoComplete={autoComplete} value={value} onChange={onChange} status={status}/>
);

export default Address;
