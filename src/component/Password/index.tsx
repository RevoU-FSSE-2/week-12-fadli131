import React from 'react';
import { Input } from 'antd';

interface Props {
  value: string;
  onChange: (e: string | React.ChangeEvent) => void
  status: "" | "error" | "warning" | undefined
}

const Password: React.FC<Props> = ({value, onChange, status}) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
    <Input.Password
      placeholder="Input password" name="password" value={value} onChange={onChange} status={status}
      visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
    />
    </>
  )

};

export default Password;
