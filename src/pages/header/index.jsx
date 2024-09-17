import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../assets/images/tesla-logo.svg";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (link) => {
    setIsMenuOpen(false);
    setActiveLink(link);
  };

  return (
    <header className="header container2">
      <nav className="header__nav">
        <div className="header__logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="header__lists">
          <ul className={`header__list ${isMenuOpen ? 'header__list-show' : ''}`}>
            <li className={`header__item ${activeLink === '/' ? 'active' : ''}`}>
              <Link className="header__link" to="/" onClick={() => handleClick('/')}>
                Model-S
              </Link>
            </li>
            <li className={`header__item ${activeLink === '/model-3' ? 'active' : ''}`}>
              <Link className="header__link" to="/model-3" onClick={() => handleClick('/model-3')}>
                Model-3
              </Link>
            </li>
            <li className={`header__item ${activeLink === '/model-x' ? 'active' : ''}`}>
              <Link className="header__link" to="/model-x" onClick={() => handleClick('/model-x')}>
                Model-X
              </Link>
            </li>
            <li className={`header__item ${activeLink === '/model-y' ? 'active' : ''}`}>
              <Link className="header__link" to="/model-y" onClick={() => handleClick('/model-y')}>
                Model-Y
              </Link>
            </li>
            <li className={`header__item ${activeLink === '/solar-roof' ? 'active' : ''}`}>
              <Link className="header__link" to="/solar-roof" onClick={() => handleClick('/solar-roof')}>
                Solar-Roof
              </Link>
            </li>
            <li className={`header__item ${activeLink === '/solar-panels' ? 'active' : ''}`}>
              <Link className="header__link" to="/solar-panels" onClick={() => handleClick('/solar-panels')}>
                Solar-Panels
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="search" />
          </div>
          <button className="header__user">
            <PersonOutlineIcon />
          </button>
          <ToggleButton
            value="justify"
            key="justify"
            className="toogle-icon"
            onClick={handleToggleClick}
          >
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
