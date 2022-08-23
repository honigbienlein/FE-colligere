import { Router } from 'express';
import { Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}