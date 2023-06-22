import React from 'react'
import { sidebar__imgs } from "../../helpers/images";
import { Link } from "react-router-dom";

function SidebarItem() {
  return (
    <div className="sidebar__icons-col">
      {
        sidebar__imgs.map(el => {
          return (
            <div className="sidebar__icons-item active" key={el.id}>
              <Link to="/" className="sidebar__icons">
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