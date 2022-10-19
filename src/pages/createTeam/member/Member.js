import '../../../styles/Member.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import Header from "../../../components/header/Header";
import axios from 'axios';
import { getWating } from "../../../util/api/team";


const TeamCode = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.team_id;

  const [waitings,setWating]= useState([]);
  
  useEffect(() => {
    (
      async () => {
        const res = await getWating(id)
        console.log(res.data.results)
        setWating([...res.data.results])
      }
    )();
  },[params])


  const data = [
    {id: 0, title: '선택 1', comment:'대구소프트웨어'},
    {id: 1, title: '선택 2', comment:'대구소프트웨어'},
    {id: 2, title: '선택 3', comment:'대구소프트웨어'},
    {id: 3, title: '선택 4', comment:'대구소프트웨어'},
  ];

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
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  const [checkItems, setCheckItems] = useState([]);
  const [teamName, setTeamName] = useState('');

  return (
    <>
    <Header/>

    <div className='background'>
      <div className='mBox'>
        <h1>{teamName}</h1>
        <button className="close" onClick={()=>{ navigate('/TeamCode') }} >
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
              checked={checkItems.length === data.length ? true : false} />
          </th>
        </tr>
      </thead>
      <div className='waitBox'>
        {data?.map((data, key) => (
          <div className='waiting' key={key}>
            <div>
              <input type='checkbox' name={`select-${data.id}`}
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                checked={checkItems.includes(data.id) ? true : false} />
            </div>
            <div className='second-row name'>{data.title}</div>
            <div className='second-row comment'>{data.comment}</div>
          </div>
        ))}
      </div>
      <div className='mBtn'>
        <button className='cBtn' onClick={()=>{
          axios.post("",{adf:data}).then(()=>{})
        }}>선택 삭제</button>
        <button className='cBtn'onClick={()=>{
          axios.post("",{adf:data}).then(()=>{})
        }}>선택 승인</button>
      </div>
    </div>
    </>
  );
};

export default TeamCode;