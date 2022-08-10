import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main, Profile, CreateTeam } from "../pages/Pagelist";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Main/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/CreateTeam" element={<CreateTeam/>}/>
      </Routes>
    </Router>
  );
};

export default App;