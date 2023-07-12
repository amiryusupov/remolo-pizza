import React, { useState } from "react";
import burger__menu from "../../assets/images/icons/burger_menu.svg"
import burger__menu2 from "../../assets/images/icons/burger_menu2.svg"
import sidebar_logo_icon from "../../assets/images/icons/sidebar__logo-icon.svg"
import sidebar_logo_text from "../../assets/images/icons/sidebar__logo-text.svg"
import SidebarItem from "./SidebarItem";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {sidebarAdminData, sidebar__icons} from "../../helpers/sidebar_icons"
const Sidebar = () => {
  const [active, setActive] = useState(0)
  const {isAuth} = useSelector((state) => state.auth)
  const {pathname} = useLocation()
  if(pathname === "/login") {
    return null
  }
  return (
  <div className={`sidebar${active ? " active" : ""}`}>
    <div className="sidebar__col">
      <button className="sidebar__col-burger" onClick={() => setActive(!active)}>
        <img src={burger__menu} alt="burger__menu" />
        </button>
        <div className="sidebar__col-logo-mobile">
          <Link to="/" className="sidebar__col-logo-imgs">
            <img src={sidebar_logo_icon} alt="sidebar__logo" />
            <img src={sidebar_logo_text} alt="sidebar__logo" />
          </Link>
          <button className="sidebar__col-burger-mobile">
            <img src={burger__menu2} alt="burger__menu" onClick={() => setActive(!active)} />
          </button>
        </div>
            <SidebarItem sidebar__data={isAuth ? sidebarAdminData : sidebar__icons}/>
    </div>
  </div>
  )
  };
export default Sidebar;