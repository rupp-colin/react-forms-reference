import React, {useState} from 'react';

const FormHeader = () => {

  const [show, setShow] = useState(true);

  const toggleHeader = () => {
    setShow(!show)
  }

    return (
      <div>
        {show && <h2>form goes here</h2>}
        <button onClick={toggleHeader}>Toggle Header</button>
      </div>
    )
}

export default FormHeader;
