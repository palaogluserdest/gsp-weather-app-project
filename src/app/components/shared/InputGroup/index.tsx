'use client';
import { FC, useState } from 'react';
import './styles.scss';
import { ErrorMessage, Field } from 'formik';

type InputGroupProps = {
  label: string;
  type: string;
  value: string;
};

const InputGroup: FC<InputGroupProps> = ({ label, type, value }) => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  return (
    <div className="register-input-group">
      <label
        htmlFor={value}
        className="register-input-label"
        style={isInputFocus ? { top: '-16px', left: '10px', color: '#000', fontSize: '14px' } : {}}
      >
        {`${label}:`}
      </label>
      <Field
        type={type}
        id={value}
        name={value}
        className="register-input-area"
        onFocus={() => setIsInputFocus(true)}
      />
      <ErrorMessage name={value}>
        {(msg) => <span className="register-error-message">{msg || '\u00A0'}</span>}
      </ErrorMessage>
    </div>
  );
};

export default InputGroup;
