import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nouislider from "nouislider-react";
import '../../styles/Progress.scss'
import {patchSlider} from "../../util/api/project";
const ProItem = ({items,setItems}) => {

  const params = useParams()
  const navigate = useNavigate()
  const [value, setValue] = useState([])
  const [isRender, setRender] = useState(false);
  const [total, setTotal] = useState();

  const displayvalue = async (idx, event, todo_id) => {
    const temp = value
    temp[idx] = parseInt(event[0])
    setValue(temp)
    setRender(prev => !prev)
    await patchSlider(todo_id, temp[idx])
    .then((res)=>{
      console.log(total);
      console.log(res);
    })

}
  return(
      <>
        <div className="promain">
          {
            items.map( (res, i ) => {
              value.push(res.percent);
              return (
                      <div className="proiteam" key={i}>
                        <div className="probox">
                          <div className="proName">{res.content}</div>
                          <div className="color"/>
                          <div className="">담당자: {res.name}</div>
                        </div>
                        <div className="nouislider-1">
                            <Nouislider
                                start={value[i]}
                                    range={{
                                    min: 0,
                                    max: 100
                                }}
                                connect onChange={(e) => displayvalue(i, e, res.id)} 
                            />
                            <p className="nouislider-2">진행도 : {value[i]}%</p>
                        </div>
                        <div>
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