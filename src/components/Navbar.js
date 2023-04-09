import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo2.jpg'

const Navbar = () => {
  return (
    // For aligning Image and one more Stack(containing Home and Exercises) horizontally
    <Stack direction="row" justifyContent="space-around" sx={{gap : {sm : '122px' , xs : '40px'} , mt : {sm : '32px' , xs : '20px'}  , justifyContent:'none' }} px="20px" >
        {/* Image Link to Home */}
        <Link to="/">
            <img src={Logo} alt='logo' style={ { width : '48px' , height : '58px' , margin : '0 20px' } }/>
        </Link>

        {/* Arrange Home and Exercise tab horizontally using  a stack direction=row */}
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            <Link to="/" style={{textDecoration: 'none' , color: '#3A1212' , borderBottom: '3px solid #FF2625'}}>Home</Link>
            <a href='#exercises' style={{textDecoration: 'none' , color: '#3A1212'}}>Exercises</a>
        </Stack>

    </Stack>
  )
}

export default Navbar
