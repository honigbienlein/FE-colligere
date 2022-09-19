import { render } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { HEROKUURL } from '../environmentVariables'
import Card from './Card'
import '../css/search.css'

export default function Search() {
	const { userId, input } = useParams()
	const [items, setItems] = useState({})

	// Get all items of user
	useEffect(() => {
		axios.get(`${HEROKUURL}/users/${userId}/items/${input}`).then(response => {
			setItems(response.data)
		})
	}, [])

	return (
		<>
			<div className='search'>
				<h1>You were searching for: {input}</h1>
			</div>
			<div className='wrapper'>
				{items?.entries?.map((item, i) => {
					console.log(items)
					return (
						<NavLink
							to={`/users/${userId}/collections/${item?.collectionId}/items/${item?.entryId}`}>
							<Card
								id={item.entryId}
								key={item.entryId}
								title={item.title}
								cover={item.cover}
							/>
						</NavLink>
					)
				})}
			</div>
			<div className='goBack'>
				<NavLink to={`/users/${userId}/collections/`}>
					<img src='/images/goback.svg' alt='goback' width='16' />
				</NavLink>
			</div>
		</>
	)
}
