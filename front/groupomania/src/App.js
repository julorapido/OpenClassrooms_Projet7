import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forum from './pages/Groupomania';
import PageNotFound from './pages/PageNotFound';
import UserProfile from './pages/UserProfile';
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forum/user/:id" element={<UserProfile/>}/>
      <Route path="/forum" element={<Forum/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
