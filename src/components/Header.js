import React from 'react';
import logo from '../img/tiff-logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="ui container">
        <img src={logo} alt="TIFF" width="80"/>
      </div>
    </div>
  );
}

export default Header;
