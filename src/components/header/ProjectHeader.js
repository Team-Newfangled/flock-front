import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Header.scss';

const Header = ({title}) => {
  const navigate = useNavigate();

  return(
    <header className="pj-header" onClick={() => navigate('/CreateTeam')}>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;

