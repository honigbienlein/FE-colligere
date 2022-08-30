import { Routes, Route } from 'react-router-dom';
import './App.css';
import Collections from './Components/Collections';
import Collection from './Components/Collection'
import Menu from './Components/Menu';
import Sign from './Components/Sign';
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Item from './Components/Item'
import Settings from './Components/Settings'
export default function App() {
  return (
  <Routes>
    <Route path="/" element={<Sign />}>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/" element={<Signin />}/>
    </Route>
    <Route path="/menu" element={<Menu />}></Route>
    <Route path="/collections" element={<Collections/>} />
    <Route path="/collections/:id" element={<Collection />} />
    <Route path="/collections/:id/:id" element={<Item />} />
    <Route path="/settings" element={<Settings />}></Route>
  </Routes>
  )
}