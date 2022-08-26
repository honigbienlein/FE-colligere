import { Routes, Route } from 'react-router-dom';
import './App.css';
import Collections from './Components/Collections';
import Collection from './Components/Collection'
import Menu from './Components/Menu';
import Sign from './Components/Sign';
import Signin from './Components/Signin'
import Signup from './Components/Signup'

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
  </Routes>
  )
}