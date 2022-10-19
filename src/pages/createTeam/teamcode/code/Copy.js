import axios from "axios";
import React from "react";
import { useRef, useState } from 'react';
import '../../../../styles/Teamleader.scss'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Copy() {
  const params = useParams();
  const [success, setSuccess] = useState(false)
  let id = params.team_id

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
      <input className='capyInput' type="text" value={`http://141.164.59.254:8080/teams/${id}/join` } ref={textInput} readOnly></input>
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