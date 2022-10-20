import '../../../styles/Member.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import Header from "../../../components/header/Header";
import axios from 'axios';
import { getWating, deleteTeamMembers, patchRecognize } from "../../../util/api/team";
import { getUserInfo } from "../../../util/api/user";

import React, { useEffect } from 'react';


const TeamCode = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.team_id;
  let name = params.team_name;

  const [waitings,setWating]= useState([]);
  // 일단 company 불러오기
  // const [userinfo, setUserinfo]=useState([]);

  useEffect(() => {
    (
      async () => {
        const res = await getWating(id)
        console.log("wating : ",res.data.results)
        setWating([...res.data.results])
      }
    )();
  },[params])
  const memberdelete = async (id,user_id)=>{
    await deleteTeamMembers(id,user_id)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const memberRecognize = async (id,user_id)=>{
    await patchRecognize(id,user_id)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
   // 체크박스 단일 선택
   const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 체크된 아이템을 제외
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      waitings.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  const [checkItems, setCheckItems] = useState([]);

  return (
    <>
    <Header/>

    <div className='background'>
      <div className='mBox'>
        <h1>{name}</h1>
        <button className="close" onClick={()=>{ navigate(`/teamcode/${id}/${name}`) }} >
              <img alt="close" src={require('../../../images/Close.svg').default}/>
        </button>
      </div>
        <thead>
        <tr style={{display: 'flex', alignItems: 'center'}}>
          <th className='chose'>전체 선택</th>
          <th>
            <input type='checkbox' name='select-all'
              onChange={(e) => handleAllCheck(e.target.checked)}
              //하나라도 해제 시 선택 해제
              checked={checkItems.length === waitings.length ? true : false} />
          </th>
        </tr>
      </thead>
      <div className='waitBox'>
        {waitings?.map((waitings, key) => (
          <div className='waiting' key={key}>
            <div>
              <input type='checkbox' name={`select-${waitings.id}`}
                onChange={(e) => handleSingleCheck(e.target.checked, waitings.id)}
                checked={checkItems.includes(waitings.id) ? true : false} />
            </div>
            <div className='second-row name'>{waitings.name}</div>
            {/* <div className='second-row comment'>{waitings.comment}</div>/ */}
          </div>
        ))}
      </div>
      <div className='mBtn'>
        <button className='cBtn' onClick={()=>{
          checkItems.map(function(a){
            memberdelete(id,a);
          })
        }}>선택 삭제</button>
        <button className='cBtn'onClick={()=>{
          checkItems.map(function(a){
            memberRecognize(id,a);
          })
        }}>선택 승인</button>
      </div>
    </div>
    </>
  );
};

export default TeamCode;