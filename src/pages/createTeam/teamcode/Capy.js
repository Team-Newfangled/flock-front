import React from "react";
import { useRef, useState } from 'react';
import '../../../styles/TeamCode.scss'

function Copy() {

  const [success, setSuccess] = useState(false)

  const textInput = useRef();

  const copy = () => {
    const el = textInput.current
    el.select()
    document.execCommand("copy")
    setSuccess(true)
  }

  return (
    <>
    <div className="capyBox">
      <input className='capyInput' type="text" value="Test Text" ref={textInput} readOnly></input>
      <button className='capyBtn' onClick={copy}>복사</button>
    </div>
      {
        success ? 
        <div onClick={alert('복사되었습니다.')}></div> : null
      }
    </>
  );
}
export default Copy;