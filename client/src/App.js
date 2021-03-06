import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Auth } from './components/Auth/Auth';

const App = () => {

  return (
    <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar/>
          {/* Grow provides a simple animation */}
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/auth" exact element={<Auth/>}/>
          </Routes>
          {/* <Home/> */}
        </Container>
    </BrowserRouter>
  )
}

export default App