import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import '../css/addItem.css'
import { HEROKUURL } from '../environmentVariables'

export default function AddItem({ scannedData }) {
	const { collectionId, userId } = useParams()
	const navigate = useNavigate()
	const titleRef = useRef()
	const subtitleRef = useRef()
	const authorsRef = useRef()
	const pagesRef = useRef()
	const publishDateRef = useRef()
	const publishersRef = useRef()
	const commentRef = useRef()
	const yesStatusRef = useRef()
	const noStatusRef = useRef()

	function saveItem() {
		console.log(titleRef.current?.value)

		if (!yesStatusRef.current.checked && !noStatusRef.current.checked) {
			window.alert('Please select yes or no.')
			return
		}
		axios
			.post(`${HEROKUURL}/users/${userId}/collections/${collectionId}/items`, {
				cover: scannedData?.cover,
				status: yesStatusRef.current.checked,
				title: titleRef?.current?.value,
				subtitle: subtitleRef?.current?.value,
				authors: authorsRef?.current?.value,
				pages: pagesRef?.current?.value,
				isbn_10: scannedData?.isbn_10,
				isbn_13: scannedData?.isbn_13,
				publishers: publishersRef?.current?.value,
				publish_date: scannedData?.publish_date,
				comment: commentRef?.current?.value,
			})
			.then(() => navigate(`/users/${userId}/collections/${collectionId}`))
	}

	if (!scannedData) {
		;<p>hoppla</p>
	}
	return (
		<>
			<div className='addItem'>
				<div className='addItemLeft'>
					<img src={scannedData?.cover} alt=''/>
				</div>
				<div className='addItemRight'>
					<h4>Have I read this?</h4>
					<div className='addItemRightStatus'>
						<div className='addItemRightStatus'>
							<input ref={yesStatusRef} type='radio' />
							<img src='/images/yes.png' alt=''/>
						</div>
						<div className='addItemRightStatus'>
							<input ref={noStatusRef} type='radio' />
							<img src='/images/no.png' alt=''/>
						</div>
					</div>
					<h4>Title</h4>
					<input ref={titleRef} type='text' defaultValue={scannedData?.title} />
					<h4>Subtitle</h4>
					<textarea ref={subtitleRef} rows='2' cols='4' defaultValue={scannedData?.subtitle} />
					<h4>Author(s)</h4>
					<input ref={authorsRef} type='text' defaultValue={scannedData?.authors} />
					<h4>Pages</h4>
					<input ref={pagesRef} type='text' defaultValue={scannedData?.pages} />
					<h4>Publish Date</h4>
					<input ref={publishDateRef} type='text' defaultValue={scannedData?.publish_date} />
					<h4>Publishers</h4>
					<input ref={publishersRef} type='text' defaultValue={scannedData?.publishers} />
					<h4>ISBN</h4>
					<input type='text' disabled defaultValue={scannedData?.isbn_10 ?? scannedData?.isbn_13} />
					<h4>Comment</h4>
					<textarea ref={commentRef} rows='4' cols='6' defaultValue={null} />
				</div>
				<button onClick={saveItem} className='addItemBottom'>
					Save
				</button>
			</div>
		</>
	)
}
