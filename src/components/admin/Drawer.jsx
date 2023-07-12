import React from 'react'

function Drawer({title, open, close, children}) {
  return (
    <div className={`drawer${open ? " open" : ""}`}>
        <div className="drawer__backdrop"></div>
        <div className="drawer__panel">
            <div className="drawer__header">
                <span className="drawer__header-title">{title}</span>
                <button className="drawer__header-close">X</button>
            </div>
            <div className="drawer__body">{children}</div>
        </div>
    </div>
  )
}

export default Drawer;