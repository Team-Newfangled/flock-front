import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/chat.scss";

const Chat = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  
  return(
    <div>
      <button className="ch-btn" onClick={() => setOpen((prev) => !prev)}></button>
      <div className="ch" style={{display: isOpen ? "flex" : "none"}}>
        <button className="ch-sns" onClick={() => navigate('/')}></button>
        <button className="ch-profile" onClick={() => navigate('/Profile')}></button>
        <button className="ch-message" onClick={() => navigate('/')}></button>
        <button className="ch-project" onClick={() => navigate('/Project')}></button>
      </div>
    </div>
  );
};

export default Chat;