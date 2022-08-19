import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { 
  Main, 
  Profile, 
  CreateTeam,
  TeamCode, 
  Member,
  Deadline,
  Project,
  Teamleader 
} from "../pages/Pagelist";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Main/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/CreateTeam" element={<CreateTeam/>}/>
        <Route path="/TeamCode" element={<TeamCode/>}/>
        <Route path="/Teamleader" element={<Teamleader/>}/>
        <Route path="/Member" element={<Member/>}/>
        <Route path="/Deadline" element={<Deadline/>}/>
        <Route path="/Project" element={<Project/>}/>
      </Routes>
    </Router>
  );
};

export default App;