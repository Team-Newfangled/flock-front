import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/Progress.scss'
import { getTodoItems } from "../../util/api/project";
import { getUserInfo } from "../../util/api/user";

const ProItem = ({items,setItems}) => {

  const params = useParams()
  
  return(
      <>
        <div className="promain">
          {
            items.map( (res, i ) => {
              document.getElementsByClassName('color').style = res.color
              console.log(document.getElementsByClassName('color').style)
              return (
                      <div className="proiteam" key={i}>
                        <div className="probox">
                          <div className="proName">{res.content}</div>
                          <div className="color"/>
                        </div>
                        <p className="proP">{res['start-date']}~{res['end-date']}</p>
                      </div>
              )
            })
          }
      </div>
      </>
  )
}

export default ProItem;