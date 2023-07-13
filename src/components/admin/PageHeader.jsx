import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function PageHeader({ title, children }) {
  const [close, setClose] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignOut = (e) => {
    dispatch(signOut(e))
    navigate("/")
    return window.location.reload()
  }
  return (
    <div className="pageHeader">
      <div className="pageHeader-profile">
        <button className="pageHeader-profile__text" title="admin" onClick={() => setClose(!close)}>A</button>
        <div className={`pageHeader-profile__dropdown${close ? " active" : ""}`} onClick={handleSignOut}>
          <span>Sign out</span>
        </div>
      </div>
      <div className="pageHeader-wrapper">
        <div className="pageHeader-row">
          <span className="pageHeader-title">{title}</span>
          <div className="pageHeader-children">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
