import React, { useState } from 'react'

// Material UI
import { Box } from '@mui/material'

// Import Components
import Exercises from '../components/Exercises.js';
import SearchExercises from '../components/SearchExercises.js';
import HeroBanner from '../components/HeroBanner.js';


const Home = () => {

    // Initialy all exercises are displayed on the home page
    const [bodyPart , setBodyPart] = useState('all');
    // To display what to display according to the changes due to search
    const [exercises , setExercises] = useState([]);


  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
