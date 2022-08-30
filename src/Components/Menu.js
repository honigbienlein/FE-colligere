import React from 'react'
import '../css/menu.css'
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Settings from './Settings';

export default function Menu() {
  const { collectionId } = useParams();
  //console.log(collectionId)
  let mainMenu = true
  const location = useLocation()
  //console.log(location)
  if(location.pathname === `/collections/${collectionId}`){
      mainMenu = false;
  }
  //console.log(mainMenu)

  /* TBD: Correct links of the Navlinks */
  return (
    <>
      <div className='menu'>
      {mainMenu ? <NavLink to="/settings"><img src="/images/settings.svg" alt="settings" /></NavLink> : <NavLink to="/"><img src="/images/goback.svg" alt="goback" /></NavLink>}
      {mainMenu ? <NavLink to="/addCollection"><img src="/images/plus.svg" alt="plus" /></NavLink> : <NavLink to="/addItem"><img src="/images/plus.svg" alt="plus" /></NavLink>}
      <NavLink to="/searchbar"><img src="/images/magnifyingglass.svg" alt="magnifyingglass" /></NavLink>
      </div>
    </>
  )
}