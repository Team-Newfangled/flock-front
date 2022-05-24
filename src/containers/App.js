import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Login, Profile, CreateTeam } from "../pages/Pagelist";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/CreateTeam" element={<CreateTeam/>}/>
    </Routes>
  );
};

export default App;