import React from 'react';
import '../../styles/Input.scss'

const Input = ({divClassName, className, label}) => {
  return (
    <>
      <div className={divClassName}>
          <div>
            <label>{label}</label>
          </div>
          <div>
            <input className={className}/>
          </div>
        <div className='change'>
          <button>변경</button>
        </div>
      </div>
    </>
  );
};

export default Input;