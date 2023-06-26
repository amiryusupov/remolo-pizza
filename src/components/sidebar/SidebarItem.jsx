import React, { useState } from 'react'
import { sidebar__icons } from "../../helpers/sidebar_icons";
import { Link } from "react-router-dom";

function SidebarItem() {
  return (
    <div className="sidebar__icons-col">
      {
        sidebar__icons.map(el => {
          return (
            <div className="sidebar__icons-item" key={el.id}>
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