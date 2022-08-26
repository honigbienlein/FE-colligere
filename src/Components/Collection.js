import React from 'react'
import { useParams } from 'react-router'
import '../css/collection.css'
import Card from './Card'
import Menu from './Menu'

export default function Collection() {

  const { collectionId } = useParams();
  //TBD: Get collectionsName of current collection
  /* const collectionName = FETCH */
  return (
    <>
      <div className="collection">
        {/* TBD: insert fetched collectionName in h1 */}
        <h1>collectionName</h1>
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