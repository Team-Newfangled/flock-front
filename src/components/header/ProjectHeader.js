import React from "react";
import '../../styles/Header.scss';

const Header = ({title}) => {
  return(
    <header className="pj-header">
      <h2>{title}</h2>
    </header>
  );
};

export default Header;

