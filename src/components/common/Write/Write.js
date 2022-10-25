import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Pen } from "../../../pages/Pagelist";
import "../../../styles/chat.scss";

const Write  = ({feeds,setfeeds,comments,setcomments,getItems}) => {
  const [isPopup, setIsPopup] = useState(false);

  const penClick = () => {
    setIsPopup(!isPopup);
  }

  return(
    <div>
      <button className="pen-btn" onClick={
        penClick
      }></button>
        {isPopup ? <Pen 
        penClick={penClick} 
        isPut={false} 
        isComment={false} 
        feeds={feeds} 
        setfeeds={setfeeds} 
        comments={comments} 
        setcomments={setcomments}
        getItems={getItems}
        /> : ''}
    </div>
  );
};

export default Write;