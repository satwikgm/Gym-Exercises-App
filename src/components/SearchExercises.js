import React, { useEffect, useState } from 'react'
import { Box , Button , Stack , TextField , Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar.js';
import { exerciseOptions , fetchData } from '../utils/fetchData.js'
import Exercises from './Exercises.js';

const SearchExercises = ({ setExercises , bodyPart , setBodyPart }) => {

    // 1. Use state Hooks
    // To store the search input value and the list of exercise categories
    const [search , setSearch] = useState("")

    // Stores an array of exercises 
    const [bodyParts , setBodyParts] = useState([]);


    // 2. Use effect Hooks
    // Used to fetch list of exercises 
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , exerciseOptions);
            // Once rendered set body parts
            setBodyParts(['all' , ...bodyPartsData])
        }
        fetchExercisesData();
    } , [])     // [] => Ony render when page loads and only once

    // Handle search function
    // Function when user clicks search button
    const handleSearch = async () => {
        // If search value is not an empty string
        if(search) {
            // fethData(url,options)
            // Makes a call to API endpoint using the above two parameteres
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises'  , exerciseOptions)

            // filter -> Is a built in JS method , to create a new array with all elements that pass the test implemented by the provided function.
            // Here we are filtering search results on name , target part , equipment and bodyPart
            const searchedExercises = exercisesData.filter((exercise) => 
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search) 
            );

            setSearch('');  // Set text to empty again
            setExercises(searchedExercises);    // Show filtered exercises
        }
    } 

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

        <Typography fontWeight={700} sx={{fontSize : { lg: '44px' , mb: '50px' , textAlign: 'center'  }}}>
            Exercises <br/> You should Know
        </Typography>


        <Box position="relative" mb="72px">
            <TextField sx={{
                      input:  { fontWeight: '700' , 
                                border: 'none' , 
                                borderRadius: '4px' 
                              } ,
                                  width : {lg : '900px' , xs : '350px'} ,
                                  backgroundColor: '#fff' , 
                                  borderRadius: '40px', 
                                 }} height="76px" value={search}  onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search for Exercises' type='text' 

            />
            <Button className='search-btn' sx=
                                        {{bgcolor: '#FF2625',
                                        color: '#FFF', 
                                        textTransform: 'none',
                                        width: {lg: '175px' , xs: '80px'},
                                        fontSize: {lg: '20px' , xs: '14px'},
                                        height: '56px',
                                        position: 'absolute',
                                        right: '0',
                                        }}  onClick={handleSearch}>
                                        Search
            </Button>
        </Box>

        <Box sx={{position:'relative' , width:'100%' , p: '20px' , }}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
        </Box>
    </Stack>
  )
}

export default SearchExercises
