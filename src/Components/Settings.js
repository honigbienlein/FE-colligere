import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/settings.css'

export default function Settings() {
  return (
    <div className="settings">
        <h1>Your Settings</h1>
        <div className="changeable">
          <div className="settingsrow">
            <div className="username">
              <label>Username</label>
            </div>
            <div className="pen">
              <NavLink to="/settings/username"><img src="/images/pen.svg" alt="pen"/></NavLink>
            </div>
          </div>
          <div className="settingsrow">
            <div className="email">
              <label>E-Mail</label>
            </div>
            <div className="pen">
              <NavLink to="/settings/username"><img src="/images/pen.svg" alt="pen"/></NavLink>
            </div>
          </div>
          <div className="settingsrow">
            <div className="password">
              <label>Password</label>
            </div>
            <div className="pen">
              <NavLink to="/settings/username"><img src="/images/pen.svg" alt="pen"/></NavLink>
            </div>
          </div>
          <div className="settingsrow">
            <div className="deleteacount">
              <label>Delete account</label>
            </div>
            <div className="pen">
              <NavLink to="/settings/username"><img src="/images/pen.svg" alt="pen"/></NavLink>
            </div>
          </div>

{/*          <div className="FAQ">
            <label><NavLink to="/faq">FAQ</NavLink></label>
        </div>  */}
        </div>
        <div className="goback">
          <NavLink to="/collections"><img src="/images/goback.svg" alt="goback" width="16" /></NavLink>
        </div>
    </div>
  )
}
