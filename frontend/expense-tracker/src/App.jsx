import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';
import Income from './pages/Income/Income';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signUp" exact element={<SignUp/>} />
          <Route path="/dashboard" exact element={<Home/>} />
          <Route path="/income" exact element={<Income/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App