import React, { useState } from 'react';

const Input = ({setAllChange, allChange, name, onClick, onChange, item}) => {
  const [change, setChange] = useState(false);
  const [changeName, setChangeName] = useState(name === "닉네임"? "inputArea1" :  "inputArea2");
  const className = name === "닉네임"? "input1 bg" :  "input2 bg";

  const getChange = () => {
    setChange(true);
    setChangeName(changeName + ' changeArea')
    setAllChange(allChange + 1)
  }

  return (
    <>
      <div className={changeName} >
          <div>
            <label>{name}</label>
          </div>
          <div>
            <input className={className} value={item} disabled/>
          </div>
        <div className='change'>
          <button onClick={getChange} className={change ? 'none' : null}>변경</button>
        </div>
        {change ?
        <> 
          <div>
            <input className={className + " changeInput"} 
                   placeholder={name === '닉네임' ? '변경할 닉네임' : '변경할 소속'}
                   onChange={(e) => onChange(e.target.value)}/>
          </div> 
          <div className='change buttonarea'>
            <button onClick={onClick} className={allChange === 2 ? 'none' : null}>변경</button>
          </div>
        </>: null}
      </div>
    </>
  );
};

export default Input;