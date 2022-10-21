import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/Progress.scss'
import { getTodoItems } from "../../util/api/project";
import { getUserInfo } from "../../util/api/user";

const ProItem = () => {

  const params = useParams()

  const [items, setItems] = useState([])

  useEffect (() => {
    (
      async () => {
        const res = await getTodoItems(params.project_id)
        let arr = res.data.results
        arr.map(a => {
          (
            async () => {
             const res =  await getUserInfo(a['writer_id'])
             a["name"] = res.data.nickname
            }
          )()
        })
        setItems([...arr])
      }
    )();
  },[])
  

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