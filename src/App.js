import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sign from './Sign';
import Signin from './Signin'
import Signup from './Signup'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Sign />}>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/" element={<Signin />}/>
        </Route>
      </Routes>
  )
}