import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Login from './components/Login';
import Profile from './components/Profile';
import Registration from './components/Registration'
import Jobs from './components/Jobs';
import Resumes from './components/Resumes';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="routes">
        <Routes>
          <Route path ="/" element = {<Login/>}/>
          <Route path ="/home" element={<Home/>}/>
          <Route path ="/login" element = {<Login/>}/>
          <Route path ="/profile" element={<Profile/>}/>
          <Route path ="/registration" element={<Registration/>}/>
          <Route path ="/jobs" element={<Jobs/>}/>
          <Route path ="/resumes" element={<Resumes/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
