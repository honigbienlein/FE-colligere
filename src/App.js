import { Routes, Route } from 'react-router-dom';
import './App.css';
import Scan from './Scan';
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
        <Route path="/scan" element={<Scan />}/>
      </Routes>
  )
}