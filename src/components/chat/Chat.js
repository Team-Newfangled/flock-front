import React, { useState } from "react";
import "../../styles/chat.scss";

const Chat = () => {
  const [isOpen, setOpen] = useState(false);
  const List = () => {
   if(isOpen){
    setOpen(false);
   }else{
     setOpen(true);
   }
  }
  return(
    <>
      <button className="ch-btn" onClick={List}>
        <div className="ch" style={{display: isOpen ? "flex" : "none"}}>
          <button className="ch-sns"></button>
          <button className="ch-profile"></button>
          <button className="ch-message"></button>
          <button className="ch-project"></button>
        </div>
    </button>
    </>
  );
};

export default Chat;