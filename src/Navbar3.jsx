import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { BiUserCircle } from "react-icons/bi";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navBar sticky-top'>
          <a href='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
          <a href='#' className='menu-bars' title="Home">
            <AiIcons.AiFillHome />
          </a>
          <a href='#' className='menu-bars' title="Service">
          <AiIcons.AiOutlineGlobal />
          </a>
          <a href='#' className='menu-bars' title= "Login">
                <BiUserCircle/>
          </a>
          <h1 className="heading">machine learning</h1>
        </div>
        <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items ' onClick={showSidebar}>
            <li className='navBar-toggle'>
              <a href='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
