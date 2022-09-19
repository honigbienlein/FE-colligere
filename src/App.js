import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Collections from './Components/Collections'
import Collection from './Components/Collection'
import Sign from './Components/Sign'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Item from './Components/Item'
import Settings from './Components/Settings'
import AddItem from './Components/AddItem'
import { useState } from 'react'
import Search from './Components/Search'

export default function App() {
	const [scannedData, setScannedData] = useState(null)
	const [input, setInput] = useState(null)

	useEffect(() => {
		console.log('app,js')
	}, [])

	return (
		<Routes>
			<Route path='/' element={<Sign />}>
				<Route path='/signup' element={<SignUp />} />
				<Route path='/' element={<SignIn />} />
			</Route>
			<Route path='/users/:userId/collections' element={<Collections />} />
			<Route
				path='/users/:userId/collections/:collectionId/addItem'
				element={<AddItem scannedData={scannedData} />}></Route>
			<Route
				path='/users/:userId/collections/:collectionId'
				element={<Collection setScannedData={setScannedData} />}
			/>
			<Route path='/users/:userId/collections/:collectionId/items/:itemId' element={<Item />} />
			<Route path='/users/:userId/settings' element={<Settings />}></Route>
			<Route path='/users/:userId/:input' element={<Search input={input} />}></Route>
		</Routes>
	)
}
