import React from 'react'
import { Route } from 'react-router'
import '../css/collections.css'
import Card from './Card'

export default function Collections() {
  return (
    <>
      <div className="yourCollections">
        <h1>Your collections</h1>
      </div>
      <div className="wrapper">
        <Card />
      </div>
    </>
  )
}
