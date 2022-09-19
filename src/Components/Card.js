import React from 'react'
import '../css/card.css'

export default function Card({ title, cover }) {
	const backgroundImg = {
		backgroundImage: `url('${cover ?? '/images/book.jpeg'}')`,
	}

	return (
		<>
			<div className='card' style={backgroundImg}>
				<div className='cardTitle'>
					<p>{title}</p>
				</div>
			</div>
		</>
	)
}
