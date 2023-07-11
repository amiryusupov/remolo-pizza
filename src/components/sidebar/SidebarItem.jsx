import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { settings } from '../../helpers/settings';

function SidebarItem({sidebar__data}) {
  const {pathname} = useLocation()
  const [activePage, setActivePage] = useState(pathname)
  useEffect(() => {
    setActivePage(pathname)
  }, [pathname])
  return (
    <div className="sidebar__icons-col">
      {
        sidebar__data.map(el => {
          return (
            <div className={`sidebar__icons-item ${el.link === activePage ? "active" : ""} red`} key={el.id}>
              <Link to={el.link} className="sidebar__icons">
              {el.image}
              <span className="sidebar__icons-text">{el.text}</span>
            </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default SidebarItem