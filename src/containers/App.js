import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { 
  Main, 
  Profile, 
  CreateTeam,
  TeamCode, 
  Member,
  Deadline,
  Project,
  Teamleader, 
  Feed,
  Pen,
  Progress,
  Ongoing
} from "../pages/Pagelist";
import { authAPI } from "../lib/API";
import { getUserInfo} from "../store/users/userData";
import useLogin from "../hooks/useLogin";
import NotFound from "../components/common/NotFound";
import Loding from "../components/common/Loading";

const App = () => {
  const dispatch = useDispatch();
  const isLogin = useLogin();
  const getUser = useCallback(async(data) => {
    await authAPI.get(`users/${data}`)
    .then(res => {
      dispatch(getUserInfo(res.data));
    })
  }, [dispatch])
  
  useEffect(() =>{
    if(isLogin){
      getUser(localStorage.getItem('user_id'));
    }
  }, [getUser, isLogin])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/CreateTeam" element={<CreateTeam/>}/>
        <Route path="/teamcode/:team_id/:team_name" element={<TeamCode/>}/> {/* 팀 정보, 팀원 수락 제외 완료  */}
        <Route path="/teamleader/:team_id/:team_name" element={<Teamleader/>}/>
        <Route path="/Member" element={<Member/>}/> {/* 팀원 신청 */}
        <Route path="/deadline/:project_id" element={<Deadline/>}/>
        <Route path="/Project/:project_id" element={<Project/>}/>
        <Route path="/Feed/:project_id" element={<Feed/>}/>
        <Route path="/Progress/:project_id" element={<Progress/>}/>
        <Route path="/Pen" element={<Pen/>}/>
        <Route path="/Ongoing" element={<Ongoing/>}/>
        <Route path="/redirect" element={<Loding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;