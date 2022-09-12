import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
};
const fieldsStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
};
const fieldStyle = {
  margin: '10px 20px'
};

const Form = ({ fields, handleOnSubmit, submitButtonLabel }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const onSubmit = (event) => {
    event.preventDefault();
    let noErrors = true;
    let wrongFields = {};
    fields.forEach((field) => {
      if (!field.validate(values[field.name])) {
        noErrors = false;
        wrongFields[field.name] = field.aclaration;
      } else wrongFields[field.name] = undefined;
    });
    setErrors({ ...errors, ...wrongFields });
    if (noErrors) {
      handleOnSubmit(values);
      //console.table(values)
      setValues({});
      setErrors({});
    };
  };
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit} style={formStyle}>
        <div style={fieldsStyle}>
          {fields.map((field, index) => {
            return (
              <div key={index} style={fieldStyle}>
                <label>
                  {field.label}:
                  {field.type === 'select' ? (
                    <Select
                      values={values}
                      field={field}
                      onChange={onChange}
                      error={!!errors[field.name]}
                    />
                  ) : (
                    <Input
                      values={values}
                      field={field}
                      onChange={onChange}
                      error={!!errors[field.name]}
                    />
                  )}
                </label>
              </div>
            );
          })}
        </div>
        <input type="submit" value={submitButtonLabel}/>
      </form>
    </div>
  );
};

export default Form;
