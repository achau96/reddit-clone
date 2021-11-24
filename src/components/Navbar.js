import React, { useRef } from 'react';
import searchIcon from './black-24dp/1x/outline_search_black_24dp.png';
import person from './person/1x/outline_person_black_24dp.png';
import arrow from './person/arrow/1x/outline_expand_more_black_24dp.png';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const textInput = useRef(null);

  const handleClick = () => {
    textInput.current.focus();
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div>Logo</div>
      </Link>
      <div className="flex searchBar">
        <div className="icon" onClick={handleClick}>
          <img src={searchIcon} alt="search icon" />
        </div>
        <div>
          <input
            className="searchInput"
            type="text"
            placeholder="Search reddit"
            ref={textInput}
          ></input>
        </div>
      </div>
      <div className="flex">
        <div className="login">Log In</div>
        <div className="signup">Sign Up</div>
        <div className="profile">
          <img className="personIcon" src={person} alt="person" />
          <img className="arrow" src={arrow} alt="expand more" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
