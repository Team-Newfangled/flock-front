import React, { useCallback, useEffect, useState } from "react";
import Nouislider from "nouislider-react";
import '../../styles/Progress.scss'
import {patchSlider} from "../../util/api/project";

const ProItem = ({items,setItems, names}) => {
  const [value, setValue] = useState([])
  const [isRender, setRender] = useState(false);
  const [total, setTotal] = useState(0);

  const displayvalue = async(idx, event, todo_id) => {
    let temp = value
    temp[idx] = parseInt(event[0])
    setValue(temp)
    setRender(prev => !prev)
    await patchSlider(todo_id, temp[idx])
    .then((res)=>{
      setTotal(totalHandler())
    })
  }

  const totalHandler = useCallback(() => {
    let sum = 0;
    value.map((val) => sum += val);
    return parseInt(sum / value.length);
  }, [value]);

  const getPercent = useCallback(() => {
    let v = [];
    items.map((item) => v.push(item.percent))
    setValue([...v])
  }, [items]);

  useEffect(() => {
    getPercent();
  }, [getPercent])

  useEffect(() => {
    setTotal(totalHandler())
  }, [totalHandler, value])

  return(
      <>
        <div className="total-wrap">
          <span>total</span>
          <h2>{total}%</h2>
        </div>
        <div className="promain">
          {
            value.length !== 0 && items.map( (res, i ) => {
              return (
                      <div className="proiteam" key={i}>
                        <div className="probox">
                          <div className="proName">{res.content}</div>
                          <div className="color"/>
                          <div className="">담당자: {names[i]}</div>
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