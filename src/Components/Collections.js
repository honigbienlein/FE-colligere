import React from 'react'
import '../css/collections.css'
import Card from './Card'
import Menu from './Menu'

export default function Collections() {
  return (
    <>
      <div className="yourCollections">
        <h1>Your collections</h1>
      </div>
      <div className="wrapper">
        <Card />
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </>
  )
}
