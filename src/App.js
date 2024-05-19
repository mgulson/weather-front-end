import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home.js'; // Import your components
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter >
      <Routes>

        <Route exact path="/" element={<Home/>} />

        {/* <Route component={NotFound} /> Catch-all route */}
       </Routes>
    </BrowserRouter>  
    </QueryClientProvider>
  );
};

export default App