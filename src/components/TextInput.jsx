import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {

  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control error';
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className={formControl}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextInput;

// add proptypes
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  valid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired
};
