import React, { useState } from 'react';

const Input = ({setAllChange, allChange, divClassName, className, label}) => {
  const [change, setChange] = useState(false);
  const [changeName, setChangeName] = useState(divClassName);
  
  const getChange = () => {
    setChange(true);
    setChangeName(divClassName + ' changeArea')
    setAllChange(allChange + 1)
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
                   placeholder={label === '닉네임' ? '변경할 닉네임' : '변경할 소속'}/>
          </div> 
          <div className='change buttonarea'>
            <button onClick={getChange} className={allChange === 2 ? 'none' : null}>변경</button>
          </div>
        </>: null}
      </div>
    </>
  );
};

export default Input;