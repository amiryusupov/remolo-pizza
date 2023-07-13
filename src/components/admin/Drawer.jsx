import React, { useEffect } from 'react'

function Drawer({ title, open, close, children }) {
  useEffect(() => {
    const backdrop = document.querySelector(".drawer__backdrop")
    backdrop.addEventListener("click", close)

    return () => backdrop.removeEventListener("click", close)
  })
  return (
    <div className={`drawer${open ? " open" : ""}`}>
      <div className="drawer__backdrop"></div>
      <div className="drawer__panel">
        <div className="drawer__header">
          <span className="drawer__header-title">{title}</span>
          <button className="drawer__header-close" onClick={close}>X</button>
        </div>
        <div className="drawer__body">{children}</div>
      </div>
    </div>
  )
}

export default Drawer;