import React from 'react'

function PageHeader({ title, children }) {
  return (
    <div className="pageHeader">
      <div className="pageHeader-row">
        <span className="pageHeader-title">{title}</span>
        <div className="pageHeader-children">{children}</div>
      </div>
    </div>

  )
}

export default PageHeader;