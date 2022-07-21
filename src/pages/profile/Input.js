import React, { useState } from 'react';
import '../../styles/Input.scss'

const Input = ({divClassName, className, label}) => {
  const [change, setChange] = useState(false);
  const [changeName, setChangeName] = useState(divClassName);
  const getChange = () => {
    setChange(true);
    setChangeName(divClassName + ' changeArea')
  }

  return (
    <>
      <div className={changeName} >
          <div>
            <label>{label}</label>
          </div>
          <div>
            <input className={className} disabled/>
          </div>
        <div className='change'>
          <button onClick={getChange} className={change ? 'none' : null}>변경</button>
        </div>
        {change ?
        <> 
          <div>
            <input className={className + " changeInput"} 
                   placeholder="변경할 닉네임"/>
          </div> 
          <div className='change'>
            <button onClick={getChange} className={!change ? 'none' : null}>변경</button>
          </div>
        </>: null}
      </div>
    </>
  );
};

export default Input;