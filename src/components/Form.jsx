import React, { useState } from 'react';

const Form = ({ fields, handleOnSubmit }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const onSubmit = () => {
    let noErrors = true;
    fields.forEach((field) => {
      if (!field.validate(values[field.name])) {
        noErrors = false;
        setErrors({...errors, [field.name]: field.aclaration});
      } else setErrors({...errors, [field.name]: undefined});
    });
    if(noErrors) console.table(values);
  };
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => {
          return (
            <div key={index}>
              <label>
                {field.label}:
                <input
                  name={field.name}
                  type={field.type}
                  value={values[field.name] || ''}
                  placeholder={field.placeholder || ''}
                  onChange={onChange}
                />
              </label>
              {!!errors[field.name] && <p>{errors[field.name]} </p>}
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
