/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useState } from 'react';
import './styles.scss';
import { ErrorMessage, Field, useFormikContext } from 'formik';

type InputGroupProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  className?: string;
};

const InputGroup: FC<InputGroupProps> = ({ label, type, id, name, className }) => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const { values } = useFormikContext<any>();
  const isInputFilled = values[name] !== '';

  return (
    <div className={`${className} register-input-group`}>
      <label
        htmlFor={id}
        className="register-input-label"
        style={isInputFocus || isInputFilled ? { top: '-16px', left: '10px', color: '#000', fontSize: '14px' } : {}}
      >
        {`${label}:`}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        className="register-input-area"
        onFocus={() => setIsInputFocus(true)}
        onBlur={() => setIsInputFocus(false)}
      />
      <ErrorMessage name={name}>
        {(msg) => <span className="register-error-message">{msg || '\u00A0'}</span>}
      </ErrorMessage>
    </div>
  );
};

export default InputGroup;
