import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = props => {
  let formControl = "form-control";
  if (props.touched && !props.valid) {
    formControl = "form-control error"
  }

  return (
    <div className="form-group">
      <select
        className={formControl}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      >
        {props.options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
  )

}

export default SelectInput

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  valid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired
};
