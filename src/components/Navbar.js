import React, { useRef } from 'react';
import searchIcon from './black-24dp/1x/outline_search_black_24dp.png';

const Navbar = (props) => {
  const textInput = useRef(null);

  const handleClick = () => {
    textInput.current.focus();
  };

  return (
    <div className="navbar">
      <div>Logo</div>
      <div className="flex searchBar">
        <div className="icon" onClick={handleClick}>
          <img src={searchIcon} alt="search icon" />
        </div>
        <div>
          <input className="searchInput" type="text" ref={textInput}></input>
        </div>
      </div>
      <div className="flex">
        <div className="login">Login</div>
        <div className="signup">Signup</div>
      </div>
    </div>
  );
};

export default Navbar;
