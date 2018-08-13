// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  type?: string,
  name: string,
  value: string,
  placeholder: string,
  change: (SyntheticEvent<any>) => void,
  error: Object,
};

function toTitleCase(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const TextInputInput = (props: Props) => {
  const { type, name, value, placeholder, change, error } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{toTitleCase(name)}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={change}
        placeholder={placeholder}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error,
        })}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputInput.defaultProps = {
  type: 'text',
};

export default TextInputInput;
