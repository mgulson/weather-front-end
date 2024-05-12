import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home.js'; // Import your components


const App = () => {
  return (
    <BrowserRouter >
      <Routes>

        <Route exact path="/" element={<Home/>} />

        {/* <Route component={NotFound} /> Catch-all route */}
       </Routes>
    </BrowserRouter>  
  );
};

export default App