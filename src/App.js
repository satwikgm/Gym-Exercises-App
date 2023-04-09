import React from 'react';
import { Route , Routes } from  'react-router-dom';
// Like div
import { Box } from '@mui/material';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

// Import Style
import './App.css'

const App = () => {
  return (
      <Box width="400px" sx={ {width : { xl : '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route  path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
  )
}

export default App;
