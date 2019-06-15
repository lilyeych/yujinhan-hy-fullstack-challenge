import React from 'react';
import logo from '../img/the-movie-db-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="ui container">
        <img src={logo} alt="The Movie DB" width="40"/>
      </div>
    </div>
  );
}

export default Footer;
