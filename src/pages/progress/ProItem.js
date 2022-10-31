import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../../styles/Progress.scss'

const ProItem = ({items,setItems}) => {

  const params = useParams()
  const navigate = useNavigate()

  return(
      <>
        <div className="promain">
          {
            items.map( (res, i ) => {
              return (
                      <div className="proiteam" key={i} onClick={() => navigate('/ongoing')}>
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