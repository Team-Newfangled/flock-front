import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dropTodoModal } from "../../../store/modal/todoModal";
import { patchContent } from "../../../util/api/deadline";
import { getTeamMembers, patchManager } from "../../../util/api/team";

const EditTodoModal = () => {
  const todoModal = useSelector((state) => state.todoModal);
  const [title, setTitle] = useState(todoModal.name);
  const [manager, setManager] = useState('');
  const [teamList, setTeamList] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();
  const ref = useRef();

  const dropHandle = useCallback(() => {
    dispatch(dropTodoModal());
  }, [dispatch]);

  const onSubmit = async(e) => {
    e.preventDefault();

    axios.all([patchManager(todoModal.id, `${manager === '' ? todoModal.manager : manager}`), patchContent(todoModal.id, title)])
    .then(axios.spread((res1, res2) => {
      console.log(res1, res2);
    })).catch((err) => {
      console.log(err);
    })
    dropHandle();
  };

  const clickOutside = useCallback((e) => {
    if(ref.current && !ref.current.contains(e.target)){
      dropHandle()
    }
  }, [dropHandle])

  const getTeamList = useCallback(async() => {
    await getTeamMembers(params.team_id)
    .then((res) => {
      console.log(res)
      setTeamList([...res.data.results]);
    }).catch((err) => {
      console.log(err)
    });
  }, [params.team_id]);

  useEffect(() => {
    getTeamList();
  }, [getTeamList])

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, [clickOutside])

  return(
    <div className="edit-todo-bg">
      <div className="edit-todo-modal" ref={ref}>
        <button className="close" onClick={dropHandle}>
            <img alt="close" src={require('../../../images/Close.svg').default}/>
        </button>
        <h2>{todoModal.name}</h2>
        <form onSubmit={onSubmit}>
          <div className="input-wrap">
            <h4>제목 수정</h4>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="수정할 제목을 입력해주세요."
            />
          </div>
          <div className="input-wrap">
            <h4>담당자 수정</h4>
            <select name="manager" value={manager} onChange={(e) => setManager(e.target.value)}>
              <option value="none" hidden>담당자를 선택해주세요.</option>
              {teamList.map((list) => (   
                <option key={list.id} value={list.id}>{list.name}</option>
              ))}
            </select>
          </div>
          <button type="submit">완료</button>
        </form>
      </div>
    </div>
  )
};

export default EditTodoModal;