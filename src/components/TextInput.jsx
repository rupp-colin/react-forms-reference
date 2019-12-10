import React from 'react';

const TextInput = (props) => {
  return (
    <div classname="form-group">
      <input type="text" className="form-control" {...props} />
    </div>
  )
}

export default TextInput;

