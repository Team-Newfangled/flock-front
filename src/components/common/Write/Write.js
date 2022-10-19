import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Pen } from "../../../pages/Pagelist";
import "../../../styles/chat.scss";

const Write  = () => {
  const [isPopup, setIsPopup] = useState(false);

  const penClick = () => {
    setIsPopup(!isPopup);
    !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
  }

  return(
    <div>
      <button className="pen-btn" onClick={
        penClick
      }></button>
        {isPopup ? <Pen penClick={penClick} isPut={false}/> : ''}
    </div>
  );
};

export default Write;